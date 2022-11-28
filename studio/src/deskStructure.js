import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { RiLayoutBottom2Line, RiLayoutTop2Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrSchedule } from "react-icons/gr";
import { HiOutlineMicrophone } from "react-icons/hi";
import { FaCog, FaHome } from "react-icons/fa";
import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../resolveProductionUrl";
import { US, SE } from "country-flag-icons/react/3x2";
import { BsGlobe } from "react-icons/bs";

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title("Preview"),
  ]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(FaHome)
        .child(
          S.list()
            .title("Home Page Languages Filter")
            .items([
              S.listItem()
                .title("All Home Pages")
                .icon(BsGlobe)
                .child(
                  S.documentList()
                    .title(`home documents`)
                    .schemaType("home")
                    .filter('_type == "home"')
                    .canHandleIntent(
                      S.documentTypeList("home").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Home Page in English")
                .icon(() => <US />)
                .child(
                  S.documentList()
                    .title(`home documents`)
                    .schemaType("home")
                    .filter('_type == "home" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("home").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Home Page in Swedish")
                .icon(() => <SE />)
                .child(
                  S.documentList()
                    .title(`home documents`)
                    .schemaType("home")
                    .filter('_type == "home" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("home").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("blog")
        .icon(IoDocumentTextOutline)
        .child(
          S.list()
            .title("blogs Languages Filter")
            .items([
              S.listItem()
                .title("All blogs")
                .icon(BsGlobe)
                .child(
                  S.documentList()
                    .title(`blog documents`)
                    .schemaType("blog")
                    .filter('_type == "blog"')
                    .canHandleIntent(
                      S.documentTypeList("blog").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("blogs in English")
                .icon(() => <US />)
                .child(
                  S.documentList()
                    .title(`Blog documents`)
                    .schemaType("blog")
                    .filter('_type == "blog" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("blog").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("blogs in Swedish")
                .icon(() => <SE />)
                .child(
                  S.documentList()
                    .title(`Blog documents`)
                    .schemaType("blog")
                    .filter('_type == "blog" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("blog").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Schedule")
        .icon(GrSchedule)
        .child(
          S.list()
            .title("Schedule Languages Filter")
            .items([
              S.listItem()
                .title("All schedules")
                .icon(BsGlobe)
                .child(
                  S.documentList()
                    .title(`schedule documents`)
                    .schemaType("scheduleDays")
                    .filter('_type == "scheduleDays"')
                    .canHandleIntent(
                      S.documentTypeList("scheduleDays").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("schedule in English")
                .icon(() => <US />)
                .child(
                  S.documentList()
                    .title(`schedule documents`)
                    .schemaType("scheduleDays")
                    .filter('_type == "scheduleDays" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("scheduleDays").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("schedule in Swedish")
                .icon(() => <SE />)
                .child(
                  S.documentList()
                    .title(`schedule documents`)
                    .schemaType("scheduleDays")
                    .filter('_type == "scheduleDays" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("scheduleDays").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Scheduled Speaker")
        .icon(HiOutlineMicrophone)
        .child(
          S.list()
            .title("Scheduled Speakers Languages Filter")
            .items([
              S.listItem()
                .title("All scheduled Speakers")
                .icon(BsGlobe)
                .child(
                  S.documentList()
                    .title(`Scheduled Speaker documents`)
                    .schemaType("scheduleSpeaker")
                    .filter('_type == "scheduleSpeaker"')
                    .canHandleIntent(
                      S.documentTypeList("scheduleSpeaker").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Scheduled Speakers in English")
                .icon(() => <US />)
                .child(
                  S.documentList()
                    .title(`Scheduled Speaker documents`)
                    .schemaType("scheduleSpeaker")
                    .filter(
                      '_type == "scheduleSpeaker" && __i18n_lang == "en-us"'
                    )
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("scheduleSpeaker").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Scheduled Speakers in Swedish")
                .icon(() => <SE />)
                .child(
                  S.documentList()
                    .title(`Scheduled Speaker documents`)
                    .schemaType("scheduleSpeaker")
                    .filter(
                      '_type == "scheduleSpeaker" && __i18n_lang == "sv-se"'
                    )
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("scheduleSpeaker").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Header")
        .icon(RiLayoutTop2Line)
        .child(
          S.list()
            .title("Header Languages Filter")
            .items([
              S.listItem()
                .title("All Headers")
                .icon(BsGlobe)
                .child(
                  S.documentList()
                    .title(`header documents`)
                    .schemaType("header")
                    .filter('_type == "header"')
                    .canHandleIntent(
                      S.documentTypeList("header").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Headers in English")
                .icon(() => <US />)
                .child(
                  S.documentList()
                    .title(`header documents`)
                    .schemaType("header")
                    .filter('_type == "header" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("header").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Headers in Swedish")
                .icon(() => <SE />)
                .child(
                  S.documentList()
                    .title(`header documents`)
                    .schemaType("header")
                    .filter('_type == "header" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("header").getCanHandleIntent()
                    )
                ),
            ])
        ),
      S.listItem()
        .title("settings")
        .icon(FaCog)
        .child(
          S.list()
            .title("Settings Languages Filter")
            .items([
              S.listItem()
                .title("All settings")
                .icon(FaCog)
                .child(
                  S.documentList()
                    .title(`Settings documents`)
                    .schemaType("settings")
                    .filter('_type == "settings"')
                    .canHandleIntent(
                      S.documentTypeList("settings").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Settings in English")
                .icon(() => <US />)
                .child(
                  S.documentList()
                    .title(`Settings documents`)
                    .schemaType("settings")
                    .filter('_type == "settings" && __i18n_lang == "en-us"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("settings").getCanHandleIntent()
                    )
                ),
              S.listItem()
                .title("Settings in Swedish")
                .icon(() => <SE />)
                .child(
                  S.documentList()
                    .title(`Settings documents`)
                    .schemaType("settings")
                    .filter('_type == "settings" && __i18n_lang == "sv-se"')
                    .params({ baseLanguage: `en_US` })
                    .canHandleIntent(
                      S.documentTypeList("settings").getCanHandleIntent()
                    )
                ),
            ])
        ),
    ]);
