import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "@/views/Homepage.vue";
import login from "../views/Login.vue";
import forgotPassword from "@/views/forgotPassword.vue";
import forgotPasswordSuccess from "@/views/forgotPasswordSuccess.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  // {

  //     path: '/',
  //     name: 'login',
  //     // component: login
  //     component: () => import ('@/views/LanddingPage.vue')
  // },
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "/forgotpassword",
    name: "forgot",
    component: forgotPassword,
  },
  {
    path: "/forgotPasswordSuccess",
    name: "forgotSuccess",
    component: forgotPasswordSuccess,
  },

  {
    path: "/printpdf",
    name: "printpdf",
    component: () => import("@/views/printpdf.vue"),
  },
  {
    path: "/ExportVat",
    name: "ExportVat",
    component: () => import("@/views/ExportExcel/ExportVat.vue"),
  },
  {
    path: "/invc",
    name: "invc",
    component: () => import("@/views/ExportExcel/ExportInvoiceeee.vue"),
  },
  {
    path: "/",
    component: Homepage,
    children: [
      {
        path: "/",
        name: "LanddingPage",
        component: () => import("@/views/LanddingPage.vue"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("@/components/search/index.vue"),
      },
      {
        path: "/course",
        name: "course",
        component: () => import("@/components/course/courseindex.vue"),
      },
      {
        path: "/course/:id/all",
        name: "course",
        component: () => import("@/components/course/courseindex.vue"),
      },
      {
        path: "/course/:degree/:slug",
        name: "course",
        sensitive: true,
        component: () => import("@/components/course/coursedetail.vue"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("@/components/news/newsindex.vue"),
      },
      {
        path: "/news/:type",
        name: "news",
        component: () => import("@/components/news/newsindex.vue"),
      },
      {
        path: "/news/:type/:slug",
        name: "newsdetail",
        component: () => import("@/components/news/newsdetail.vue"),
      },
      {
        path: "/student-scholarship",
        name: "scholarship",
        component: () =>
          import("@/components/scholarship/scholarshipindex.vue"),
      },
      {
        path: "/scholarship",
        name: "scholarshipCourse",
        component: () =>
          import("@/components/scholarship/scholarshipCourse.vue"),
      },
      {
        path: "/apply/:id",
        name: "apply",
        component: () => import("@/components/apply/applyindex.vue"),
      },
      {
        path: "/student-download",
        name: "student-download",
        component: () => import("@/components/student/download.vue"),
      },
      {
        path: "/exam",
        name: "exam",
        component: () => import("@/components/student/exam.vue"),
      },
      {
        path: "/alumni",
        name: "alumni",
        component: () => import("@/components/student/alumni.vue"),
      },
      {
        path: "/alumninews",
        name: "alumninews",
        component: () => import("@/components/student/alumninews.vue"),
      },
      {
        path: "/alumninews/:id",
        name: "alumniarticle",
        component: () => import("@/components/student/alumniarticle.vue"),
      },
      {
        path: "/alumniarticle",
        name: "alumniarticle",
        component: () => import("@/components/student/alumniarticle.vue"),
      },
      {
        path: "/alumnilist",
        name: "alumnilist",
        component: () => import("@/components/student/alumnilist.vue"),
      },
      {
        path: "/qualification",
        name: "qualification",
        component: () => import("@/components/student/qualification.vue"),
      },
      {
        path: "/studentwork",
        name: "studentwork",
        component: () => import("@/components/student/studentwork.vue"),
      },
      {
        path: "/teachers",
        name: "teachers",
        component: () => import("@/components/staff/index.vue"),
      },
      {
        path: "/staff",
        name: "staff",
        component: () => import("@/components/staff/index.vue"),
      },
      {
        path: "/teachers/:id",
        name: "staff-detail",
        component: () => import("@/components/staff/detail.vue"),
      },
      {
        path: "/dissertation",
        name: "dissertation",
        component: () => import("@/components/staff/publication.vue"),
      },
      {
        path: "/research",
        name: "research",
        component: () => import("@/components/staff/publication.vue"),
      },
      {
        path: "/journal",
        name: "journal",
        component: () => import("@/components/staff/journal.vue"),
      },
      {
        path: "/journal/:type",
        name: "journal",
        component: () => import("@/components/staff/journal.vue"),
      },
      {
        path: "/journal/:type/:id",
        name: "journal-detail",
        component: () => import("@/components/staff/journal-detail.vue"),
      },
      {
        path: "/journal-detail",
        name: "journal-detail",
        component: () => import("@/components/staff/journal-detail.vue"),
      },
      {
        path: "/journal-howto",
        name: "journal-howto",
        component: () => import("@/components/staff/journal-howto.vue"),
      },
      {
        path: "/conference",
        name: "conference",
        component: () => import("@/components/staff/conference.vue"),
      },
      {
        path: "/conference/:type",
        name: "conference",
        component: () => import("@/components/staff/conference.vue"),
      },
      {
        path: "/conference/:type/:id",
        name: "conference-detail",
        component: () => import("@/components/staff/conference-detail.vue"),
      },
      // {
      //     path: '/national-conference',
      //     name: 'conference',
      //     component: () => import ('@/components/staff/conference.vue')
      // },
      // {
      //     path: '/conference-submit',
      //     name: 'conference-detail',
      //     component: () => import ('@/components/staff/conference-detail.vue')
      // },
      {
        path: "/national-conference-submit",
        name: "conference-detail",
        component: () => import("@/components/staff/conference-detail.vue"),
      },
      {
        path: "/knowledge",
        name: "knowledge",
        component: () => import("@/components/staff/knowledge.vue"),
      },
      {
        path: "/annualreport",
        name: "annualreport",
        component: () => import("@/components/staff/annualreport.vue"),
      },
      {
        path: "/annual-detail",
        name: "annual-detail",
        component: () => import("@/components/staff/annual-detail.vue"),
      },
      {
        path: "/about-faculty",
        name: "aboutus",
        component: () => import("@/components/about/aboutus.vue"),
      },
      {
        path: "/awards",
        name: "awards",
        component: () => import("@/components/about/awards.vue"),
      },
      {
        path: "/contactus",
        name: "contactus",
        component: () => import("@/components/about/contactus.vue"),
      },
      {
        path: "/brand",
        name: "brand",
        component: () => import("@/components/about/brand.vue"),
      },
      {
        path: "/partner",
        name: "partner",
        component: () => import("@/components/about/partner.vue"),
      },
      {
        path: "/reward",
        name: "reward",
        component: () => import("@/components/about/reward.vue"),
      },
      {
        path: "/calendar/:degree",
        name: "calendar",
        component: () => import("@/components/about/calendar.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
