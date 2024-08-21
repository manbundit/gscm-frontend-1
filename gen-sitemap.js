const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const axios = require('axios')

const hostname = 'https://gscm.nida.ac.th';

const urls = [
  { url: '/', priority: 1.0 },
  { url: 'apply/master', priority: 0.9 },
  { url: 'apply/doctoral', priority: 0.9 },
  { url: '/scholarship', priority: 0.9 },
  { url: '/course/master/all', priority: 0.9 },
  { url: '/course/doctoral/all', priority: 0.9 },
  // { url: '/course/master/{name_en}', priority: - },
  // { url: '/course/doctoral/{name_en}', priority: - },
  { url: '/calendar/master', priority: 0.7 },
  { url: '/calendar/doctoral', priority: 0.7 },
  { url: '/student-scholarship', priority: 0.7 },
  { url: '/student-download', priority: 0.7 },
  { url: '/exam', priority: 0.7 },
  { url: '/qualification', priority: 0.7 },
  { url: '/studentwork', priority: 0.6 },
  { url: '/about-faculty', priority: 0.8 },
  { url: '/partner', priority: 0.7 },
  { url: '/awards', priority: 0.7 },
  { url: '/brand', priority: 0.6 },
  { url: '/news/faculty', priority: 0.8 },
  // { url: '/news/faculty/{slug}', priority: - },
  { url: '/news/general', priority: 0.8 },
  // { url: '/news/general/{slug}', priority: - },
  { url: '/news/admission-result', priority: 0.8 },
  // { url: '/news/admission-result/{slug}', priority: - },
  { url: '/news/interesting', priority: 0.7 },
  // { url: '/news/interesting/{slug}', priority: - },
  { url: '/alumninews', priority: 0.6 },
  // { url: '/alumninews/{slug}', priority: - },
  { url: '/alumnilist', priority: 0.8 },
  { url: '/teachers', priority: 0.8 },
  { url: '/staff', priority: 0.7 },
  { url: '/dissertation', priority: 0.7 },
  { url: '/research', priority: 0.7 },
  { url: '/conference', priority: 0.6 },
  { url: '/conference-submit', priority: 0.6 },
  { url: '/national-conference', priority: 0.6 },
  { url: '//national-conference-submit', priority: 0.6 },
  { url: '/journal/communication-arts-and-innovation', priority: 0.6 },
  // { url: '/journal/communication-arts-and-innovation/detail/{name_en}', priority: - },
  { url: '/journal/communication-and-management', priority: 0.6 },
  // { url: '/journal/communication-and-management/detail/{name_en}', priority: - },
  { url: '/knowledge', priority: 0.6 },
  { url: '/annualreport', priority: 0.6 },
  { url: '/contactus', priority: 0.8 },
];

const changefreqs = {
  'always': 1,
  'hourly': 0.9,
  'daily': 0.8,
  'weekly': 0.7,
  'monthly': 0.6,
  'yearly': 0.5,
  'never': 0
};

const getChangeFreq = (priority) => {
  Object.keys(changefreqs).find(key => {
    return changefreqs[key] <= priority;
  });
}

const apiUrl = 'https://gscm-service.yuzudigital.com'

async function fetchCourseSlugs() {
  const response = await axios.get(
    `${apiUrl}/courses`
  );
  // console.log("getAllCourse", response.data.data);
  const items = response.data.data;
  const masterItems = items.filter((x) => x.levelId == 12).map(x => x.id);
  const phdItems = items.filter((x) => x.levelId == 13).map(x => x.id);
  return [masterItems, phdItems]
}

async function fetchNewsFacultySlugs() {
  const response = await axios.get(
    `${apiUrl}/news?type=1`
  );
  return response.data.data.map((x) => x.id)
}
async function fetchNewsGeneralSlugs() {
  const response = await axios.get(
    `${apiUrl}/news?type=2`
  );
  return response.data.data.map((x) => x.id)
}
async function fetchNewsAdmissionResultSlugs() {
  const response = await axios.get(
    `${apiUrl}/news?type=3`
  );
  return response.data.data.map((x) => x.id)
}
async function fetchNewsInterestingSlugs() {
  const response = await axios.get(
    `${apiUrl}/news?type=4`
  );
  return response.data.data.map((x) => x.id)
}
async function fetchAlumniNewsSlugs() {
  return ['']
}
async function fetchJournalArtSlugs() {
  const response = await axios.get(
    `${apiUrl}/academicJournals?type_th=${encodeURI('นิเทศศาสตร์และนวัตกรรม')}&offset=1&limit=1000`
  );
  return response.data.data.map((x) => x.id)
}
async function fetchJournalManagement() {
  const response = await axios.get(
    `${apiUrl}/academicJournals?type_th=${encodeURI('การสื่อสารและการจัดการ')}&offset=1&limit=1000`
  );
  return response.data.data.map((x) => x.id)
}

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  urls.forEach(url => {
    const priority = url.priority;
    const changefreq = getChangeFreq(priority)
    url.changefreq = changefreq;
    sitemap.write(url);
  });

  const [masterCourseSlugs, doctoralCourseSlugs] = await fetchCourseSlugs();
  masterCourseSlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/course/master/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  doctoralCourseSlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/course/doctoral/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const newsGeneralSlugs = await fetchNewsGeneralSlugs();
  newsGeneralSlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/news/general/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const newsAdmissionResultSlugs = await fetchNewsAdmissionResultSlugs();
  newsAdmissionResultSlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/news/admission-result/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const newsFacultySlugs = await fetchNewsFacultySlugs();
  newsFacultySlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/news/faculty/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const newsInterestingSlugs = await fetchNewsInterestingSlugs();
  newsInterestingSlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/news/interesting/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const alumniNews = await fetchAlumniNewsSlugs();
  alumniNews.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/alumninews/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const journalArtSlugs = await fetchJournalArtSlugs();
  journalArtSlugs.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/journal/communication-arts-and-innovation/detail/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });
  const journalManagementSlug = await fetchJournalManagement();
  journalManagementSlug.forEach(slug => {
    // const priority = 0.9
    const url = {
      url: `/journal/communication-and-management/detail/${slug}`,
      // priority,
      // changefreq: getChangeFreq[priority]
    };
    sitemap.write(url);
  });

  sitemap.end();

  streamToPromise(sitemap).then(sm => {
    const filePath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(filePath, sm);
  }).catch(e => {
    console.log(e)
  })
}

generateSitemap()