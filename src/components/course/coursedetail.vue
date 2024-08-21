<template>
  <div class="-mt-top">
    <CourseBanner
      v-if="courseDetail"
      :title="
        $store.state.lang == 'th'
          ? courseDetail.title_th
          : courseDetail.title_en
      "
      img="/course/detail-banner.jpg"
      :backLinkText="`${
        isMaster ? $t('allMasterPrograms') : $t('allDoctoralPrograms')
      }`"
      backLink="/course"
      :course="$t('masterOfArts')"
      :description="
        $store.state.lang == 'th'
          ? courseDetail.short_desc_th
          : courseDetail.short_desc_en
      "
      :updatedDate="
        $store.state.lang == 'th'
          ? 'มกราคม-เมษายน 2565'
          : 'January - Apirl 2022'
      "
    >
    </CourseBanner>
    <!-- <v-img
      src="@/assets/TitleCover.png"
      lazy-src="@/assets/TitleCover.png"
      style="margin-top: -58px"
    >
      <span
        class="fonttitle"
        style="
          float: left;
          width: 50%;
          font-family: 'IBM Plex Sans Thai';
          font-style: normal;
          color: white;
          font-weight: 600;
          line-height: 32px;
        "
      >
        <h2
          style="
            color: white;
            font-weight: 600;
            line-height: 32px;
            margin-bottom: 0px;
          "
        >
          นิเทศศาสตร์และนวัตกรรม
        </h2>
        <br />
        <span
          style="
            font-family: 'IBM Plex Sans Thai';
            font-style: normal;
            color: white;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          "
        >
          เพื่อผลิตบุคลากรทางวิชาการ ทรัพยากรบุคคล
          และกำลังคนยุคใหม่ที่มีทักษะด้านเทคโนโลยีและ
          ความคิดสร้างสรรค์ที่พร้อมรับการเปลี่ยนแปลงของโลกใหม่ในอนาคตอันจะช่วยให้ภาครัฐและเอกชน
          ของประเทศไทยพร้อมที่จะแข่งขันกับประเทศต่างๆ
          ในเวทีโลกได้อย่างมีประสิทธิภาพ
        </span>
      </span>
    </v-img> -->

    <section
      class="tw-px-[16px] md:tw-px-[60px] tw-max-w-[1680px] tw-mx-auto tw-bg-white course_detail-container"
    >
      <div
        class="tw-flex tw-flex-wrap md:tw-flex-nowrap tw-flex-col-reverse md:tw-flex-row"
      >
        <section
          class="md:tw-max-w-[calc(66.66%-20px)] tw-max-w-[100%] tw-w-[100%]"
        >
          <div class="content-wrapper">
            <div
              class="order-1 order-md-first mt-10"
              v-if="(isMaster || isPhd) && courseDetail"
            >
              <h2
                v-if="
                  $store.state.lang == 'th'
                    ? courseDetail.course_highlights_th
                    : courseDetail.course_highlights_en
                "
              >
                {{ $t("courseHighlight") }}
              </h2>
              <div
                v-if="courseDetail.course_highlights_th"
                v-html="
                  $store.state.lang == 'th'
                    ? courseDetail.course_highlights_th
                    : courseDetail.course_highlights_en
                "
              ></div>
            </div>

            <div v-if="majorNews.length > 0">
              <!-- <div v-if="isMaster && majorNews.length > 0"> -->
              <h2>{{ $t("majors") }}</h2>
              <span style="color: #545454"
                >{{ majorNews.length }} {{ $t("majorsSubject") }}</span
              >
              <!-- <span style="color: #545454">นักศึกษาสามารถเลือกศึกษาแบบมีสาขาวิชาเอก คือ
                เลือกรายวิชาจากสาขาวิชาเอกใดสาขาวิชาเอกหนึ่ง ทั้งสาขาวิชาเอก
                หรือเลือกศึกษาแบบไม่มีสาขาวิชาเอก คือ เลือกรายวิชาใดๆ
                จากสาขาวิชาเอกใดๆ ให้ครบ 12 หน่วยกิต</span> -->
              <div
                class="tw-flex tw-pl-[16px] sm:tw-pl-[0px] tw-mx-[-16px] sm:tw-mx-[0px] tw-flex-nowrap tw-overflow-x-auto sm:tw-flex-wrap tw-mt-[20px] tw-text-[16px] tw-font-medium tw-text-left tw-gap-[16px] tw-mb-[20px]"
              >
                <div
                  v-for="(i, index) in majorNews"
                  class="box-major tw-max-w-[calc(100%-56px)] tw-items-center tw-flex tw-flex-shrink-0 sm:tw-max-w-[calc(50%-8px)] tw-w-[100%]"
                  :class="i.selectedBox == 1 ? 'isselectBox' : 'notselectBox'"
                  style="cursor: pointer"
                  @click="onClickSelectBox(i, index)"
                >
                  {{ $store.state.lang == "th" ? i.name_th : i.name_en }}
                </div>
                <div />
              </div>
            </div>
            <div class="tw-mb-[56px]">
              <!-- <div class="tw-mb-[56px]" v-if="isMaster"> -->
              <v-card
                elevation="0"
                style="background-color: #f6f6f6"
                class="tw-p-[24px]"
                v-if="majorNews.length > 0"
              >
                <!-- <v-row>
                <h2>ทั้งหมด</h2>
                <v-col cols="12"></v-col>
                </v-row> -->
                <div>
                  <!-- <div class="tw-mb-[18px]">
                    <span style="
                      font-weight: 400;
                      font-size: 16px;
                      line-height: 24px;
                      color: #996f00;
                    ">*{{ $t("onlyOpenForSemesters") }} 2</span>
                  </div> -->
                  <!-- <div>
                    <h2 class="tw-text-[24px]" class="tw-mb-[6px]">สาขาวิชาเอกนวัตกรรมการสื่อสารการตลาดและดิจิทัล</h2>
                    <span style="font-size: 14px; color: #545454">
                      4 รายวิชา
                    </span>
                  </div> -->
                  <div class="tw-mt-[18px]" v-if="majorNews.length > 0">
                    <v-expansion-panels
                      accordion
                      v-model="coursepanel"
                      mandatory
                    >
                      <v-expansion-panel
                        v-for="subject in selectedMajors.subject"
                      >
                        <v-expansion-panel-header class="py-6 header1">
                          {{ subject.courses_offered.subjectCode }}
                          {{
                            $store.state.lang == "th"
                              ? subject.courses_offered.name_th
                              : subject.courses_offered.name_en
                          }}
                          <template v-slot:active>
                            <v-icon color="#24988B"> $expand </v-icon>
                          </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="tw-p-[16px]">
                          <span
                            style="
                              font-family: 'IBM Plex Sans Thai Looped';
                              font-weight: 400;
                              font-size: 15px;
                              line-height: 24px;
                              color: #0d0e10;
                            "
                          >
                            {{
                              $store.state.lang == "th"
                                ? subject.courses_offered.description_th
                                : subject.courses_offered.description_en
                            }}
                          </span>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                  <div class="tw-mt-[32px]" v-if="majorNews.length > 0">
                    <h2 class="tw-mb-[18px]">
                      {{ $t("careerOpportunities") }}
                    </h2>

                    <div
                      v-html="
                        $store.state.lang == 'th'
                          ? selectedMajors.chance_th
                          : selectedMajors.chance_en
                      "
                    ></div>
                  </div>
                </div>
              </v-card>
            </div>

            <div
              v-if="
                $store.state.lang == 'th' && courseDetail.careerOpportunities_th
              "
            >
              <h2>{{ $t("careerOpportunities") }}</h2>
              <div v-html="courseDetail.careerOpportunities_th"></div>
            </div>
            <div
              v-if="
                $store.state.lang == 'en' && courseDetail.careerOpportunities_en
              "
            >
              <h2>{{ $t("careerOpportunities") }}</h2>
              <div v-html="courseDetail.careerOpportunities_en"></div>
            </div>

            <div class="tw-mb-[56px] mt-10" v-if="isMaster || isPhd">
              <h2>{{ $t("expectedLearningOutcomes") }}</h2>
              <div>
                <div
                  v-for="i in expectedLearningOutcomes"
                  class="tw-flex tw-gap-[10px] tw-mb-[18px] tw-items-center"
                >
                  <v-icon color="#2AB3A3">mdi-check-circle-outline</v-icon>
                  <span>
                    {{
                      $store.state.lang == "th"
                        ? i.description_th
                        : i.description_en
                    }}
                  </span>
                </div>
              </div>
            </div>
            <div class="tw-mb-[56px]" v-if="isMaster">
              <h2>{{ $t("courseStructure") }}</h2>
              <div class="table-overflow">
                <table>
                  <tr>
                    <th>{{ $t("subjects") }}</th>
                    <th v-for="i in subjectStructures">
                      <!-- {{ $t("courseStructure") }} {{ $t("plan") }} ก<br />
                      <span style="font-size: 14px; color: #545454">*{{ $t("doADissertation") }}</span> -->
                      {{ $store.state.lang == "th" ? i.name_th : i.name_en }}
                    </th>
                    <!-- <th>{{ $t("courseStructure") }} {{ $t("plan") }} ข</th> -->
                  </tr>
                  <tr>
                    <td>{{ $t("basicSupplementarySubjects") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit1 }}</td>
                    <!-- <td>{{ $t("creditsAreNotCounted") }}</td>
                    <td>{{ $t("creditsAreNotCounted") }}</td> -->
                  </tr>
                  <tr>
                    <td>{{ $t("mainSubject") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit2 }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("majorsSubject") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit3 }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("elective") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit4 }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("independentResearchSubject") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit5 }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("dissertation") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit6 }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("total") }}</th>
                    <td v-for="i in subjectStructures">{{ i.summary }}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="tw-mb-[56px]" v-if="isPhd">
              <h2>{{ $t("courseStructure") }}</h2>
              <div class="table-overflow">
                <table>
                  <tr>
                    <th>{{ $t("subjects") }}</th>
                    <th v-for="i in subjectStructures">
                      <!-- {{ $t("courseStructure") }} {{ $t("plan") }} ก<br />
                      <span style="font-size: 14px; color: #545454">*{{ $t("doADissertation") }}</span> -->
                      {{ $store.state.lang == "th" ? i.name_th : i.name_en }}
                    </th>
                    <!-- <th>{{ $t("courseStructure") }} {{ $t("plan") }} ข</th> -->
                  </tr>
                  <tr>
                    <td>{{ $t("basicSupplementarySubjects") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit1 }}</td>
                    <!-- <td>{{ $t("creditsAreNotCounted") }}</td>
                    <td>{{ $t("creditsAreNotCounted") }}</td> -->
                  </tr>

                  <tr>
                    <td>วิชาพื้นฐาน</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit2 }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("mainSubject") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit3 }}</td>
                  </tr>
                  <tr>
                    <td>วิชาระเบียบวิจัย</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit4 }}</td>
                  </tr>
                  <tr>
                    <td>{{ $t("elective") }}</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit5 }}</td>
                  </tr>
                  <tr>
                    <td>สอบวัดคุณสมบัติ</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit6 }}</td>
                  </tr>
                  <tr>
                    <td>วิทยานิพนธ์ดุษฎีบัณฑิต</td>
                    <td v-for="i in subjectStructures">{{ i.countUnit7 }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("total") }}</th>
                    <td v-for="i in subjectStructures">{{ i.summary }}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="tw-mb-[56px]" v-if="isMaster || isPhd">
              <h2>{{ $t("subjectsAndDescription") }}</h2>
              <span style="font-weight: 400; font-size: 14px"
                >5 {{ $t("subject") }}</span
              >
              <div
                class="tw-flex tw-pl-[16px] sm:tw-pl-[0px] tw-mx-[-16px] sm:tw-mx-[0px] tw-flex-nowrap tw-overflow-x-auto sm:tw-flex-wrap tw-gap-[12px] tw-my-[20px]"
              >
                <v-btn
                  outlined
                  rounded
                  class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 1 ? '#2AB3A3' : '#E2E2E2'"
                  @click="isbtnselect(1)"
                >
                  <span
                    :style="btnselected == 1 ? 'color:#2AB3A3' : 'color:black'"
                    >{{ $t("all") }}</span
                  ></v-btn
                >
                <v-btn
                  outlined
                  rounded
                  class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 2 ? '#2AB3A3' : '#E2E2E2'"
                  @click="isbtnselect(2)"
                >
                  <span
                    :style="btnselected == 2 ? 'color:#2AB3A3' : 'color:black'"
                    >{{ $t("basicSubjectsRegularSessionOnly") }}</span
                  ></v-btn
                >
                <v-btn
                  outlined
                  rounded
                  class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 3 ? '#2AB3A3' : '#E2E2E2'"
                  @click="isbtnselect(3)"
                >
                  <span
                    :style="btnselected == 3 ? 'color:#2AB3A3' : 'color:black'"
                    >{{ $t("mainSubjects") }}</span
                  ></v-btn
                >
                <v-btn
                  outlined
                  rounded
                  class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 4 ? '#2AB3A3' : '#E2E2E2'"
                  @click="isbtnselect(4)"
                >
                  <span
                    :style="btnselected == 4 ? 'color:#2AB3A3' : 'color:black'"
                    >{{ $t("majorsSubjects") }}</span
                  ></v-btn
                >
                <v-btn
                  outlined
                  rounded
                  class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 5 ? '#2AB3A3' : '#E2E2E2'"
                  @click="isbtnselect(5)"
                >
                  <span
                    :style="btnselected == 5 ? 'color:#2AB3A3' : 'color:black'"
                    >{{ $t("electives") }}</span
                  ></v-btn
                >
                <v-btn
                  outlined
                  rounded
                  class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 6 ? '#2AB3A3' : '#E2E2E2'"
                  @click="isbtnselect(6)"
                >
                  <span
                    :style="btnselected == 6 ? 'color:#2AB3A3' : 'color:black'"
                    >{{ $t("dissertationAndIndependentResearch") }}</span
                  ></v-btn
                >
                <div />
              </div>
              <div>
                <v-card
                  elevation="0"
                  style="background-color: #f6f6f6"
                  class="pa-4 !tw-rounded-none"
                >
                  <div>
                    <v-col cols="12">
                      <h2 class="tw-mb-[6px]">{{ selectedSubjectText }}</h2>
                      <span class="tw-text-[14px]"
                        >{{ selectedCourseSubjectList.length }}
                        {{ $t("courses") }}
                      </span>
                    </v-col>
                    <v-col cols="12">
                      <v-expansion-panels
                        accordion
                        v-model="coursepanel2"
                        mandatory
                      >
                        <v-expansion-panel
                          v-for="i in selectedCourseSubjectList"
                        >
                          <v-expansion-panel-header class="py-6 header1">
                            <!-- color="#EEFBFA" -->

                            {{ i.subjectCode }}
                            {{
                              $store.state.lang == "th" ? i.name_th : i.name_en
                            }}
                            <template v-slot:active>
                              <v-icon color="#24988B"> $expand </v-icon>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class="tw-p-[16px]">
                            <span
                              style="
                                font-family: 'IBM Plex Sans Thai Looped';
                                font-weight: 400;
                                font-size: 15px;
                                line-height: 24px;
                                color: #0d0e10;
                              "
                            >
                              {{
                                $store.state.lang == "th"
                                  ? i.description_th
                                  : i.description_en
                              }}
                            </span>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>

                    <v-col cols="12"></v-col>
                  </div>
                </v-card>
              </div>
            </div>

            <!-- <div class="tw-mb-[56px]" v-if="isPhd">
              <h2>{{ $t("courseFormat") }}</h2>
              <span style="font-weight: 400; font-size: 14px">5 {{ $t("subject") }}</span>
              <div
                class="tw-flex tw-pl-[16px] sm:tw-pl-[0px] tw-mx-[-16px] sm:tw-mx-[0px] tw-flex-nowrap tw-overflow-x-auto sm:tw-flex-wrap tw-gap-[12px] tw-my-[20px]">
                <v-btn outlined rounded class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 1 ? '#2AB3A3' : '#E2E2E2'" @click="isbtnselect(1)">
                  <span :style="btnselected == 1 ? 'color:#2AB3A3' : 'color:black'">{{ $t("all") }}</span></v-btn>
                <v-btn outlined rounded class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 2 ? '#2AB3A3' : '#E2E2E2'" @click="isbtnselect(2)">
                  <span :style="btnselected == 2 ? 'color:#2AB3A3' : 'color:black'">{{
                    $t("basicSubjectsRegularSessionOnly") }}</span></v-btn>
                <v-btn outlined rounded class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 3 ? '#2AB3A3' : '#E2E2E2'" @click="isbtnselect(3)">
                  <span :style="btnselected == 3 ? 'color:#2AB3A3' : 'color:black'">{{ $t("mainSubjects")
                  }}</span></v-btn>
                <v-btn outlined rounded class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 4 ? '#2AB3A3' : '#E2E2E2'" @click="isbtnselect(4)">
                  <span :style="btnselected == 4 ? 'color:#2AB3A3' : 'color:black'">{{ $t("majorsSubjects")
                  }}</span></v-btn>
                <v-btn outlined rounded class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 5 ? '#2AB3A3' : '#E2E2E2'" @click="isbtnselect(5)">
                  <span :style="btnselected == 5 ? 'color:#2AB3A3' : 'color:black'">{{ $t("electives") }}</span></v-btn>
                <v-btn outlined rounded class="!tw-py-[12px] !tw-h-[auto] !tw-px-[18px]"
                  :color="btnselected == 6 ? '#2AB3A3' : '#E2E2E2'" @click="isbtnselect(6)">
                  <span :style="btnselected == 6 ? 'color:#2AB3A3' : 'color:black'">{{
                    $t("dissertationAndIndependentResearch") }}</span></v-btn>
                <div />
              </div>
              <div>
                <v-card elevation="0" style="background-color: #f6f6f6" class="pa-4 !tw-rounded-none">
                  <div>
                    <v-col cols="12">
                      <h2 class="tw-text-[24px]" class="tw-mb-[6px]">{{ $t("all") }}</h2>
                      <span class="tw-text-[14px]">4 {{ $t("courses") }}</span>
                    </v-col>
                    <v-col cols="12">
                      <v-expansion-panels accordion v-model="coursepanel2" mandatory>
                        <v-expansion-panel v-for="i in course2">
                          <v-expansion-panel-header class="py-6 header1">
                            {{ i.title }}
                            <template v-slot:active>
                              <v-icon color="#24988B"> $expand </v-icon>
                            </template>
                          </v-expansion-panel-header>
                          <v-expansion-panel-content class="tw-p-[16px]">
                            <span style="
                                font-family: 'IBM Plex Sans Thai Looped';
                                font-weight: 400;
                                font-size: 15px;
                                line-height: 24px;
                                color: #0d0e10;
                              ">
                              {{ i.description }}
                            </span>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-col>
                    <v-col cols="12"></v-col>
                  </div>
                </v-card>
              </div>
            </div> -->

            <div v-if="isMaster || isPhd">
              <div v-if="faqs.length > 0">
                <v-col cols="12">
                  <h2>{{ $t("frequentlyAsked") }}</h2>
                </v-col>
                <v-col cols="12">
                  <v-expansion-panels accordion v-model="coursepanel3">
                    <v-expansion-panel v-for="i in faqs">
                      <v-expansion-panel-header class="py-6 header1">
                        <!-- color="#EEFBFA" -->

                        {{
                          $store.state.lang == "th"
                            ? i.question_th
                            : i.question_en
                            ? i.question_en
                            : i.question_th
                        }}
                        <template v-slot:active>
                          <v-icon color="#24988B"> $expand </v-icon>
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content class="tw-p-[16px]">
                        <span
                          style="
                            font-family: 'IBM Plex Sans Thai Looped';
                            font-weight: 400;
                            font-size: 15px;
                            line-height: 24px;
                            color: #0d0e10;
                          "
                          v-html="
                            $store.state.lang == 'th'
                              ? i.answer_th
                              : i.answer_en
                              ? i.answer_en
                              : i.answer_th
                          "
                        >
                        </span>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>

                <v-col cols="12"></v-col>
              </div>
            </div>

            <!-- <Gallery title="รูปบรรยากาศ" :images="galleryImages" /> -->
            <!-- <Reviews /> -->
          </div>
        </section>

        <div
          class="tw-flex tw-flex-col tw-ml-auto tw-w-[100%] md:tw-w-[33.33%] tw-mt-[-70px]"
        >
          <div style="filter: drop-shadow(0px 16px 48px rgba(0, 0, 0, 0.12))">
            <v-card
              :style="
                $vuetify.breakpoint.width > 959
                  ? 'border-radius: 0px; background: #FFFFFF;border-width: 0px 0.5px 0.5px 0.5px;border-style: solid;border-color: #E2E2E2; margin-top: -250px;'
                  : ''
              "
              elevation="0"
              :class="$vuetify.breakpoint.width > 959 ? 'imagecard' : ''"
            >
              <v-img :src="this.courseDetail.img_url"></v-img>
              <!-- <v-img src="@/assets/icons/Cover.png"></v-img> -->
              <v-row justify="center" no-gutters>
                <v-col
                  v-if="studyFeesType1.length"
                  :md="
                    studyFeesType1.length ? (studyFeesType2.length ? 6 : 12) : 0
                  "
                  sm="6"
                  class="pl-0 pr-0 pb-0"
                >
                  <div
                    :class="selected == 1 ? 'pa-4 isselect' : 'pa-4 notselect'"
                    @click="selected = 1"
                    style="cursor: pointer"
                  >
                    {{ $t("regularSector") }}
                  </div>
                </v-col>
                <v-col
                  v-if="studyFeesType2.length"
                  :md="
                    studyFeesType2.length ? (studyFeesType1.length ? 6 : 12) : 0
                  "
                  sm="6"
                  class="pl-0 pr-0 pb-0"
                >
                  <div
                    :class="selected == 2 ? 'pa-4 isselect' : 'pa-4 notselect'"
                    @click="selected = 2"
                    style="cursor: pointer"
                  >
                    {{ $t("specialSector") }}
                  </div>
                </v-col>
                <v-row justify="center" v-if="selected == 1">
                  <v-col cols="11" class="mt-4">
                    <v-expansion-panels accordion v-model="panel" mandatory>
                      <v-expansion-panel v-for="i in studyFeesType1">
                        <v-expansion-panel-header class="py-6 header1">
                          {{
                            $store.state.lang == "th" ? i.name_th : i.name_en
                          }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="tw-p-[16px]">
                          <v-row no-gutters class="pt-4">
                            <v-col cols="1" class="pr-1">
                              <v-img
                                src="@/assets/icons/Wallet.png"
                                max-width="21px"
                                max-height="21px"
                              ></v-img>
                            </v-col>
                            <v-col cols="10" class="ml-4">
                              <span class="header1">
                                {{ $t("tuitionFee") }}
                              </span>
                              <br />
                              <span> {{ i.pricePerUnit }} </span>
                              <br />
                              <span> {{ i.allCost }} </span>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>

                <v-row justify="center" v-if="selected == 2">
                  <v-col cols="11" class="mt-4">
                    <v-expansion-panels accordion v-model="panel" mandatory>
                      <v-expansion-panel v-for="i in studyFeesType2">
                        <v-expansion-panel-header class="py-6 header1">
                          {{
                            $store.state.lang == "th" ? i.name_th : i.name_en
                          }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="tw-p-[16px]">
                          <v-row no-gutters class="pt-4">
                            <v-col cols="1" class="pr-1">
                              <v-img
                                src="@/assets/icons/Wallet.png"
                                max-width="21px"
                                max-height="21px"
                              ></v-img>
                            </v-col>
                            <v-col cols="10" class="ml-4">
                              <span class="header1">
                                {{ $t("tuitionFee") }}
                              </span>
                              <br />
                              <span> {{ i.pricePerUnit }} </span>
                              <br />
                              <span> {{ i.allCost }} </span>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>

                <v-col cols="11">
                  <v-row no-gutters v-if="dayTime">
                    <v-col
                      cols="6"
                      sm="6"
                      md="12"
                      class="mt-4"
                      v-if="dayTime.study_day_times.length"
                    >
                      <div class="tw-flex tw-gap-[12px]">
                        <v-img
                          src="@/assets/icons/Clock.png"
                          max-width="21px"
                          min-width="21px"
                          max-height="21px"
                        ></v-img>
                        <div>
                          <span class="header1">{{ $t("studyTime") }}</span>
                          <br />
                          <div v-for="i in dayTime.study_day_times">
                            <span>{{ i.day }} {{ i.time }}</span>
                          </div>
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="6"
                      sm="6"
                      md="12"
                      class="mt-4"
                      v-if="dayTime.semesters.length"
                    >
                      <div class="tw-flex tw-gap-[12px]">
                        <v-img
                          src="@/assets/icons/Calendar.png"
                          max-width="21px"
                          min-width="21px"
                          max-height="21px"
                        ></v-img>
                        <div>
                          <span class="header1">{{ $t("term") }}</span>
                          <br />
                          <div v-for="i in dayTime.semesters">
                            <span
                              >{{ i.semester_name }}
                              {{ i.semester_month }}</span
                            >
                          </div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="11">
                  <v-btn
                    class="my-4"
                    color="#2AB3A3"
                    dark
                    style="border-radius: 0px; font-size: 16px"
                    block
                    @click="onCLickRegister()"
                    >{{ $t("register") }}</v-btn
                  >
                </v-col>
              </v-row>
              <v-divider v-if="$vuetify.breakpoint.width < 959"></v-divider>
            </v-card>
          </div>

          <div style="margin-top: 56px">
            <v-card
              elevation="0"
              class="tw-p-[24px] contact-card !tw-rounded-none"
              :class="$vuetify.breakpoint.width > 959 ? 'imagecard' : ''"
            >
              <h2
                class="tw-text-[18px] tw-mb-[6px]"
                style="color: #545454; font-weight: 600"
              >
                {{ $t("contactForAsk") }}
              </h2>
              <!-- <h1
                class="tw-text-[18px] tw-mb-[6px] tw-text-semibold"
                style="color: #545454"
              >
                {{ $t("contactForAsk") }}
              </h1> -->
              <div no-gutters>
                <div class="tw-flex tw-gap-[12px] tw-mb-[16px] tw-text-[14px]">
                  <span style="color: #545454"
                    >{{ $t("monday") }} - {{ $t("friday") }} 9:00 - 16:00</span
                  >
                </div>
                <div class="tw-flex tw-gap-[12px] tw-mb-[16px]">
                  <v-img
                    src="@/assets/icons/location.png"
                    max-width="24px"
                    max-height="24px"
                  ></v-img>
                  <span>
                    อาคารมาลัย หุวะนันทน์ ชั้น 8 เลขที่ 148 หมู่ 3 ถนนเสรีไทย
                    แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240
                  </span>
                </div>
                <div class="tw-flex tw-gap-[12px] tw-mb-[16px]">
                  <v-img
                    src="@/assets/icons/phone.png"
                    max-width="24px"
                    max-height="24px"
                  ></v-img>
                  <span>0 2727 3759, 0 2727 3764, 09 0678 4690</span>
                </div>
                <div class="tw-flex tw-gap-[12px] tw-mb-[16px]">
                  <v-img
                    src="@/assets/icons/email.png"
                    max-width="24px"
                    max-height="24px"
                  ></v-img>
                  <span>gscm@nida.ac.th</span>
                </div>
                <div class="tw-flex tw-gap-[12px] tw-mb-[16px]">
                  <v-img
                    src="@/assets/icons/logo-facebook.png"
                    max-width="24px"
                    max-height="24px"
                  ></v-img>
                  <span
                    >นิเทศ at NIDA
                    <v-icon color="#2AB3A3">mdi-arrow-top-right</v-icon></span
                  >
                </div>
                <div class="tw-flex tw-gap-[12px]">
                  <v-img
                    src="@/assets/icons/linelogo.png"
                    max-width="24px"
                    max-height="24px"
                  ></v-img>
                  <span
                    >@GSCM <v-icon color="#2AB3A3">mdi-arrow-top-right</v-icon>
                  </span>
                </div>
              </div>
            </v-card>
          </div>
        </div>
        <!-- <v-col cols="12" md="8" sm="12">
        </v-col> -->

        <!-- วาป -->
      </div>
    </section>
    <Footers />
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";
import Activities from "@/components/Activities.vue";
import Footers from "@/components/Footers.vue";
import CourseBanner from "../_components-Course/CourseBanner.vue";
import Gallery from "../_components-Course/Gallery.vue";
import Reviews from "../_components-Course/Reviews.vue";
export default {
  components: {
    Comments,
    Activities,
    Footers,
    CourseBanner,
    Gallery,
    Reviews,
  },
  data() {
    return {
      btnselected: 1,
      selected: 1,
      selectedBox: 1,
      panel: 0,
      coursepanel: [0],
      coursepanel2: [0],
      coursepanel3: [],
      galleryImages: [
        {
          src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
          thumbnail:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
          w: 1875,
          h: 2500,
        },
        {
          src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
          thumbnail:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
          w: 1669,
          h: 2500,
        },
        {
          src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
          thumbnail:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
          w: 2500,
          h: 1666,
        },
        {
          src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
          thumbnail:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
          w: 1875,
          h: 2500,
          title: "Will be used for caption",
        },
        {
          src: "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
          thumbnail:
            "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
          w: 1669,
          h: 2500,
        },
      ],
      course: [
        {
          title: "นน 7001 แนวโน้มการตลาดและการวิเคราะห์ประสบการณ์ผู้บริโภค",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title:
            "นน 7002 การวางแผนกลยุทธ์และการจัดการการสื่อสารเชิงเนื้อหาแบบบูรณาการ",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title: "นน 7003 การสื่อสารองค์กรและการจัดการตราสินค้า",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title: "นน 7004 โครงการรณรงค์ด้านนวัตกรรมการสื่อสารการตลาดร",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
      ],
      course2: [
        {
          title: "นน 7001 แนวโน้มการตลาดและการวิเคราะห์ประสบการณ์ผู้บริโภค",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title:
            "นน 7002 การวางแผนกลยุทธ์และการจัดการการสื่อสารเชิงเนื้อหาแบบบูรณาการ",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title: "นน 7003 การสื่อสารองค์กรและการจัดการตราสินค้า",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title: "นน 7004 โครงการรณรงค์ด้านนวัตกรรมการสื่อสารการตลาดร",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
      ],
      course3: [
        {
          title: "คุณสมบัติของผู้สมัครปริญญาโท",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title: "วิธีการสมัคร",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
        {
          title: "วิธีการคัดเลือกผู้รับสมัคร",
          description:
            "รายวิชานี้มุ่งเน้นการศึกษา แนวคิด ทฤษฎี และเครื่องมือวิเคราะห์วิจัยต่างๆ ที่จำเป็นในการวิเคราะห์แนวโน้มของสถานการณ์ทางการตลาด ความเข้าใจพฤติกรรมผู้บริโภค ทั้งการตัดสินใจ และสิ่งที่แสดงออก การกำหนดกลยุทธ์การสื่อสารการตลาดแบบคาดการณ์ และโครงการรณรงค์ทางการสื่อสารการตลาดบนพื้นฐานของการคำนึงถึงผู้บริโภคเป็นหลัก",
        },
      ],
      model: 0,
      items: [],
      courseDetail: null,
      courseSubjectList: [],
      majorNews: [],
      subjectStructures: [],
      studyFeesType1: [],
      studyFeesType2: [],
      dayTime: [],
      expectedLearningOutcomes: [],
      faqs: [],
      selectedMajors: [],
      selectedCourseSubjectList: [],
      isMaster: false,
      isPhd: false,
      selectedSubjectText: "ทั้งหมด",
    };
  },

  async created() {
    console.log("breakpoint", this.$vuetify.breakpoint);
    await this.getAll();
  },
  watch: {
    "$route.params.courseId": {
      handler() {
        // Do stuff
        this.$router.go(0);
      },
    },
  },
  computed: {
    // isMaster() {
    //   return this.$route.query.type === '1' || !this.$route.query.type
    // },
    // isPhd() {
    //   return this.$route.query.type === '2'
    // },
  },
  methods: {
    onCLickRegister() {
      // alert(`/apply/${this.isMaster ? "master" : "doctoral"}`);
      this.$router.push(`/apply/${this.isMaster ? "master" : "doctoral"}`);
    },
    onClickSelectBox(selected, index) {
      console.log(this.selectedMajors);

      this.selectedMajors = selected;
      console.log(this.selectedMajors);
      this.majorNews.forEach((element) => {
        element.selectedBox = 0;
      });

      this.majorNews[index].selectedBox = 1;
    },
    isbtnselect(val) {
      console.log("val", val);
      this.btnselected = val;
      if (val == 1) {
        this.selectedCourseSubjectList = this.courseSubjectList;
      } else if (val == 2) {
        this.selectedCourseSubjectList = this.courseSubjectList.filter(
          (data) => data.subjectGroup == "หมวดวิชาเสริมพื้นฐาน (เฉพาะภาคปกติ)"
        );
        this.selectedSubjectText = "หมวดวิชาเสริมพื้นฐาน (เฉพาะภาคปกติ)";
      } else if (val == 3) {
        this.selectedCourseSubjectList = this.courseSubjectList.filter(
          (data) => data.subjectGroup == "หมวดวิชาหลัก"
        );
        this.selectedSubjectText = "หมวดวิชาหลัก";
      } else if (val == 4) {
        this.selectedCourseSubjectList = this.courseSubjectList.filter(
          (data) => data.subjectGroup == "หมวดวิชาเอก"
        );
        this.selectedSubjectText = "หมวดวิชาเอก";
      } else if (val == 5) {
        this.selectedCourseSubjectList = this.courseSubjectList.filter(
          (data) => data.subjectGroup == "หมวดวิชาเลือก"
        );
        this.selectedSubjectText = "หมวดวิชาเลือก";
      } else if (val == 6) {
        this.selectedCourseSubjectList = this.courseSubjectList.filter(
          (data) => data.subjectGroup == "วิทยานิพนธ์/วิชาการค้นคว้าอิสระ"
        );
        this.selectedSubjectText = "วิทยานิพนธ์/วิชาการค้นคว้าอิสระ";
      }
    },
    async getAll() {
      let slug = this.$route.params.slug;
      console.log("this.$route", this.$route);
      let modifiedUrl = slug.replace(/_/g, " ");
      const responseAll = await this.axios.get(
        `${process.env.VUE_APP_API}/courses`
      );
      console.log("responseAll 1", responseAll.data.data);
      let itemFilter = responseAll.data.data.filter(
        (x) => x.title_en === modifiedUrl
      );
      console.log("itemFilter", itemFilter);

      if (itemFilter.length) {
        const responseCourseDetail = await this.axios.get(
          `${process.env.VUE_APP_API}/courseStructures/form4/${itemFilter[0].id}`
        );
        console.log("responseCourseDetail", responseCourseDetail.data.data);
        this.courseDetail = responseCourseDetail.data.data;
      } else {
        console.log(this.$route.params);
        let modifiedTitle = this.$route.params.slug.replace(/_/g, " ");
        let slug = this.feeds.filter((x) => x.title_en === modifiedTitle);
        const responseCourseDetail = await this.axios.get(
          `${process.env.VUE_APP_API}/courseStructures/form4/${slug[0].id}`
        );
        console.log("responseCourseDetail", responseCourseDetail.data.data);
        this.courseDetail = responseCourseDetail.data.data;
      }
      let courseId = this.courseDetail.id;

      // if (this.$route.params.courseId) {
      //   courseId = this.$route.params.courseId;
      // }
      // const responseCourseDetail = await this.axios.get(
      //   `${process.env.VUE_APP_API}/courseStructures/form4/${courseId}`
      // );
      // console.log("responseCourseDetail", responseCourseDetail.data.data);
      // this.courseDetail = responseCourseDetail.data.data;

      if (this.courseDetail.levelId == 12) {
        this.isMaster = true;
        this.isPhd = false;
      } else {
        this.isMaster = false;
        this.isPhd = true;
      }

      console.log("level", this.isPhd);
      const coursesOffereds = await this.axios.get(
        `${process.env.VUE_APP_API}/coursesOffereds?courseId=${courseId}`
      );
      console.log("courseSubjectList", coursesOffereds.data.data);
      this.courseSubjectList = coursesOffereds.data.data;
      this.selectedCourseSubjectList = this.courseSubjectList;

      this.selectedCourseSubjectList.sort((a, b) =>
        a.subjectCode.localeCompare(b.subjectCode)
      );

      const majorNews = await this.axios.get(
        `${process.env.VUE_APP_API}/majorNews?courseId=${courseId}`
      );
      console.log("majorNews", majorNews.data.data);
      this.majorNews = majorNews.data.data;
      if (this.majorNews.length > 0) {
        this.majorNews[0].selectedBox = 1;
        this.selectedMajors = this.majorNews[0];
      }

      const subjectStructures = await this.axios.get(
        `${process.env.VUE_APP_API}/subjectStructures?courseId=${courseId}`
      );
      console.log("subjectStructures", subjectStructures.data.data);
      this.subjectStructures = subjectStructures.data.data;

      const studyFeesType1 = await this.axios.get(
        `${process.env.VUE_APP_API}/studyFees?type=1&courseId=${courseId}`
      );
      console.log("studyFeesType1", studyFeesType1.data.data);
      this.studyFeesType1 = studyFeesType1.data.data;

      if (this.studyFeesType1.length) {
        this.selected = 1;
        console.log("this.studyFeesType1", this.studyFeesType1);
        console.log("this.selected this.selected", this.selected);
      } else {
        this.selected = 2;
        console.log("this.studyFeesType1", this.studyFeesType1);
        console.log("this.selected this.selected", this.selected);
      }

      const studyFeesType2 = await this.axios.get(
        `${process.env.VUE_APP_API}/studyFees?type=2&courseId=${courseId}`
      );
      console.log("studyFeesType2", studyFeesType2.data.data);
      this.studyFeesType2 = studyFeesType2.data.data;

      const dayTime = await this.axios.get(
        `${process.env.VUE_APP_API}/courses/form6/${courseId}`
      );
      console.log("dayTime", dayTime.data.form6);
      this.dayTime = dayTime.data.form6;

      const expectedLearningOutcomes = await this.axios.get(
        `${process.env.VUE_APP_API}/expectedLearningOutcomes?courseId=${courseId}`
      );
      console.log(
        "expectedLearningOutcomes",
        expectedLearningOutcomes.data.data
      );
      this.expectedLearningOutcomes = expectedLearningOutcomes.data.data;

      const faqs = await this.axios.get(
        `${process.env.VUE_APP_API}/faqs?courseId=${courseId}`
      );
      console.log("faqs", faqs.data.data);
      this.faqs = faqs.data.data;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .v-expansion-panel {
    &::before {
      box-shadow: none;
    }
  }
}

.content-wrapper {
  font-size: 16px;
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
  }
}

.contact-card {
  border: 1px solid #e2e2e2;
}

.v-expansion-panel--active > .v-expansion-panel-header {
  min-height: unset !important;
  background-color: #eefbfa;
  color: #24988b;
  padding: 16px !important;
  border-radius: 0 !important;
}

.v-expansion-panel-header {
  padding: 16px !important;
  border-radius: 0 !important;
}

.box-major {
  padding: 16px;
}

.isselect {
  border: solid 0.5px #e2e2e2;
  text-align: center;
  font-size: 16px;
  color: #24988b;
  border-bottom: 2px solid #24988b;
}

.notselect {
  border: solid 0.5px #e2e2e2;
  text-align: center;
  font-size: 16px;
  background-color: #f6f6f6;
}

.isselectBox {
  /* width: 340px; */
  /* height: 80px; */
  border: solid 0.5px #24988b;
  font-size: 16px;
  color: #24988b;
  background: #eefbfa;
}

.notselectBox {
  /* width: 340px; */
  /* height: 80px; */
  border: solid 0.5px #e2e2e2;
  /* text-align: center;s */
  font-size: 16px;
  background-color: #ffffff;
}

.table-overflow {
  width: calc(100% + 32px);
  overflow: auto;
  margin-left: -16px;
  margin-right: -16px;
  padding: 0 16px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th {
  min-width: 200px;
}

td,
th {
  border: 1px solid #e2e2e2;
  text-align: center;
  padding: 18px;
}

tr:nth-child(even) {
  background-color: #f6f6f6;
}
</style>
<style lang="scss">
ul {
  list-style: disc;
  list-style-position: inside;
  /* li {
    &::before {
      content:"·";
      font-size: 34px !important;
      margin-right: 6px;
      vertical-align:middle;
      line-height:20px;
    }
  } */
}

.fonttitle {
  @media only screen and (min-width: 0px) {
    font-size: 30px;
    position: absolute;
    bottom: 8px;
    left: 16px;
    margin: 10px;
  }

  @media only screen and (min-width: 414px) {
    font-size: 36px;
    position: absolute;
    bottom: 8px;
    left: 16px;
    margin: 10px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 42px;
    position: absolute;
    bottom: 8px;
    left: 16px;
    margin: 10px;
  }
}

.imagecard {
  @media only screen and (min-width: 0px) {
    width: 272px;
    // height: 160px;
  }

  @media only screen and (min-width: 414px) {
    width: 292px;
    // height: 200px;
  }

  @media only screen and (min-width: 960px) {
    width: 544px;
    // height: 300px;
  }

  .header1 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
}

/* ::v-deep { */
.v-expansion-panels {
  border-radius: 0 !important;
  border: 1px solid #e2e2e2;
}

::v-deep {
  .v-expansion-panel {
    &::before {
      content: none;
    }
  }
}

.v-expansion-panel-content__wrap {
  padding: 0 !important;
}

.v-expansion-panel-header--active {
  .v-expansion-panel-header__icon {
    .v-icon {
      color: #24988b !important;
    }
  }
}

/* } */
</style>