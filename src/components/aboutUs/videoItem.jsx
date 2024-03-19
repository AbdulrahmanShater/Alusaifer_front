import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";


const test = [
  {
    "uri": "/videos/900435578",
    "name": "شقق النخبة",
    "description": null,
    "type": "video",
    "link": "https://vimeo.com/900435578",
    "player_embed_url": "https://player.vimeo.com/video/900435578?h=3fbcd309ca",
    "duration": 22,
    "width": 480,
    "language": "en",
    "height": 848,
    "embed": {
      "html": "<iframe src=\"https://player.vimeo.com/video/900435578?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=288640\" width=\"480\" height=\"848\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture; clipboard-write\" title=\"شقق النخبة\"></iframe>",
      "badges": {
        "hdr": false,
        "live": {
          "streaming": false,
          "archived": false
        },
        "staff_pick": {
          "normal": false,
          "best_of_the_month": false,
          "best_of_the_year": false,
          "premiere": false
        },
        "vod": false,
        "weekend_challenge": false
      },
      "interactive": false,
      "buttons": {
        "watchlater": true,
        "share": true,
        "embed": true,
        "hd": false,
        "fullscreen": true,
        "scaling": true,
        "like": true
      },
      "logos": {
        "vimeo": true,
        "custom": {
          "active": false,
          "url": null,
          "link": null,
          "use_link": false,
          "sticky": false
        }
      },
      "play_button": {
        "position": "auto"
      },
      "title": {
        "name": "user",
        "owner": "user",
        "portrait": "user"
      },
      "end_screen": [],
      "playbar": true,
      "quality_selector": null,
      "pip": true,
      "autopip": true,
      "volume": true,
      "color": "00adef",
      "colors": {
        "color_one": "000000",
        "color_two": "00adef",
        "color_three": "ffffff",
        "color_four": "000000"
      },
      "event_schedule": true,
      "has_cards": false,
      "outro_type": "videos",
      "show_timezone": false,
      "cards": [],
      "airplay": true,
      "audio_tracks": true,
      "chapters": true,
      "chromecast": true,
      "closed_captions": true,
      "transcript": true,
      "uri": null,
      "email_capture_form": null,
      "speed": true
    },
    "created_time": "2024-01-06T20:45:12+00:00",
    "modified_time": "2024-01-06T20:47:31+00:00",
    "release_time": "2024-01-06T20:45:12+00:00",
    "content_rating": [
      "unrated"
    ],
    "content_rating_class": "unrated",
    "rating_mod_locked": false,
    "license": null,
    "privacy": {
      "view": "anybody",
      "embed": "public",
      "download": true,
      "add": true,
      "comments": "anybody"
    },
    "pictures": {
      "uri": "/videos/900435578/pictures/1778700155",
      "active": true,
      "type": "custom",
      "base_link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d",
      "sizes": [
        {
          "width": 100,
          "height": 75,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_100x75?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_100x75&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 200,
          "height": 150,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_200x150?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 295,
          "height": 166,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_295x166?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 640,
          "height": 360,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_640x360?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 960,
          "height": 540,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_960x540?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_960x540&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 1280,
          "height": 720,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_1280x720?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 1920,
          "height": 1080,
          "link": "https://i.vimeocdn.com/video/1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_1920x1080?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778700155-61f92a594c15dac214880be9146bc190197d5efaa3b2aee9d5b90480bb28bb42-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }
      ],
      "resource_key": "9c882f8cd84d01b9a0222ed21b9d59ce60fbe1a0",
      "default_picture": false
    },
    "tags": [],
    "stats": {
      "plays": 0
    },
    "categories": [],
    "uploader": {
      "pictures": {
        "uri": "/users/212495594/pictures/94254004",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/portrait/94254004",
        "sizes": [
          {
            "width": 30,
            "height": 30,
            "link": "https://i.vimeocdn.com/portrait/94254004_30x30"
          },
          {
            "width": 72,
            "height": 72,
            "link": "https://i.vimeocdn.com/portrait/94254004_72x72"
          },
          {
            "width": 75,
            "height": 75,
            "link": "https://i.vimeocdn.com/portrait/94254004_75x75"
          },
          {
            "width": 100,
            "height": 100,
            "link": "https://i.vimeocdn.com/portrait/94254004_100x100"
          },
          {
            "width": 144,
            "height": 144,
            "link": "https://i.vimeocdn.com/portrait/94254004_144x144"
          },
          {
            "width": 216,
            "height": 216,
            "link": "https://i.vimeocdn.com/portrait/94254004_216x216"
          },
          {
            "width": 288,
            "height": 288,
            "link": "https://i.vimeocdn.com/portrait/94254004_288x288"
          },
          {
            "width": 300,
            "height": 300,
            "link": "https://i.vimeocdn.com/portrait/94254004_300x300"
          },
          {
            "width": 360,
            "height": 360,
            "link": "https://i.vimeocdn.com/portrait/94254004_360x360"
          }
        ],
        "resource_key": "6c34fa630f7a065a7110ebfe196aafb8e200fc08",
        "default_picture": false
      }
    },
    "metadata": {
      "connections": {
        "comments": {
          "uri": "/videos/900435578/comments",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "credits": {
          "uri": "/videos/900435578/credits",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "likes": {
          "uri": "/videos/900435578/likes",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "pictures": {
          "uri": "/videos/900435578/pictures",
          "options": [
            "GET",
            "POST"
          ],
          "total": 1
        },
        "texttracks": {
          "uri": "/videos/900435578/texttracks",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "related": {
          "uri": "/me/videos?per_page=3&offset=1",
          "options": [
            "GET"
          ]
        },
        "recommendations": {
          "uri": "/videos/900435578/recommendations",
          "options": [
            "GET"
          ]
        },
        "albums": {
          "uri": "/videos/900435578/albums",
          "options": [
            "GET",
            "PATCH"
          ],
          "total": 0
        },
        "available_albums": {
          "uri": "/videos/900435578/available_albums",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "available_channels": {
          "uri": "/videos/900435578/available_channels",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "versions": {
          "uri": "/videos/900435578/versions",
          "options": [
            "GET"
          ],
          "total": 1,
          "current_uri": "/videos/900435578/versions/881463878",
          "resource_key": "c1d18c2c851648eead9964d05c87f4111a6a0b13",
          "latest_incomplete_version": null
        }
      },
      "interactions": {
        "watchlater": {
          "uri": "/users/212495594/watchlater/900435578",
          "options": [
            "GET",
            "PUT",
            "DELETE"
          ],
          "added": false,
          "added_time": null
        },
        "report": {
          "uri": "/videos/900435578/report",
          "options": [
            "POST"
          ],
          "reason": [
            "pornographic",
            "harassment",
            "ripoff",
            "incorrect rating",
            "spam",
            "causes harm",
            "csam"
          ]
        },
        "view_team_members": {
          "uri": "/videos/900435578/teammembers",
          "options": [
            "GET"
          ]
        },
        "edit": {
          "uri": "/videos/900435578",
          "options": [
            "PATCH"
          ],
          "blocked_fields": []
        },
        "edit_content_rating": {
          "uri": "/videos/900435578",
          "options": [
            "PATCH"
          ],
          "content_rating": [
            "language",
            "drugs",
            "violence",
            "nudity",
            "advertisement",
            "safe",
            "unrated"
          ]
        },
        "edit_privacy": {
          "uri": "/videos/900435578",
          "options": [
            "PATCH"
          ],
          "content_type": "application/vnd.vimeo.video",
          "properties": [
            {
              "name": "privacy.view",
              "required": true,
              "options": [
                "anybody",
                "nobody",
                "password",
                "disable",
                "unlisted"
              ]
            }
          ]
        },
        "delete": {
          "uri": "/videos/900435578",
          "options": [
            "DELETE"
          ]
        },
        "can_update_privacy_to_public": {
          "uri": "/videos/900435578",
          "options": [
            "PATCH"
          ]
        },
        "invite": {
          "uri": "/users/212495594/team_user_clip_access_grants",
          "options": [
            "GET",
            "POST"
          ]
        },
        "trim": {
          "uri": "/videos/900435578/cliptrim",
          "options": [
            "GET",
            "POST"
          ]
        },
        "validate": {
          "uri": "/videos/900435578/validate",
          "options": [
            "PUT"
          ]
        }
      },
      "is_vimeo_create": false,
      "is_screen_record": false
    },
    "manage_link": "/manage/videos/900435578",
    "user": {
      "uri": "/users/212495594",
      "name": "Alusaifer",
      "link": "https://vimeo.com/user212495594",
      "capabilities": {
        "hasLiveSubscription": false,
        "hasEnterpriseLihp": false,
        "hasSvvTimecodedComments": true,
        "hasSimplifiedEnterpriseAccount": false
      },
      "location": "",
      "gender": "",
      "bio": null,
      "short_bio": null,
      "created_time": "2023-12-10T15:11:56+00:00",
      "pictures": {
        "uri": "/users/212495594/pictures/94254004",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/portrait/94254004",
        "sizes": [
          {
            "width": 30,
            "height": 30,
            "link": "https://i.vimeocdn.com/portrait/94254004_30x30"
          },
          {
            "width": 72,
            "height": 72,
            "link": "https://i.vimeocdn.com/portrait/94254004_72x72"
          },
          {
            "width": 75,
            "height": 75,
            "link": "https://i.vimeocdn.com/portrait/94254004_75x75"
          },
          {
            "width": 100,
            "height": 100,
            "link": "https://i.vimeocdn.com/portrait/94254004_100x100"
          },
          {
            "width": 144,
            "height": 144,
            "link": "https://i.vimeocdn.com/portrait/94254004_144x144"
          },
          {
            "width": 216,
            "height": 216,
            "link": "https://i.vimeocdn.com/portrait/94254004_216x216"
          },
          {
            "width": 288,
            "height": 288,
            "link": "https://i.vimeocdn.com/portrait/94254004_288x288"
          },
          {
            "width": 300,
            "height": 300,
            "link": "https://i.vimeocdn.com/portrait/94254004_300x300"
          },
          {
            "width": 360,
            "height": 360,
            "link": "https://i.vimeocdn.com/portrait/94254004_360x360"
          }
        ],
        "resource_key": "6c34fa630f7a065a7110ebfe196aafb8e200fc08",
        "default_picture": false
      },
      "websites": [],
      "metadata": {
        "connections": {
          "albums": {
            "uri": "/users/212495594/albums",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "appearances": {
            "uri": "/users/212495594/appearances",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "categories": {
            "uri": "/users/212495594/categories",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "channels": {
            "uri": "/users/212495594/channels",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "feed": {
            "uri": "/users/212495594/feed",
            "options": [
              "GET"
            ]
          },
          "followers": {
            "uri": "/users/212495594/followers",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "following": {
            "uri": "/users/212495594/following",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "groups": {
            "uri": "/users/212495594/groups",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "likes": {
            "uri": "/users/212495594/likes",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "membership": {
            "uri": "/users/212495594/membership/",
            "options": [
              "PATCH"
            ]
          },
          "moderated_channels": {
            "uri": "/users/212495594/channels?filter=moderated",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "portfolios": {
            "uri": "/users/212495594/portfolios",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "videos": {
            "uri": "/users/212495594/videos",
            "options": [
              "GET"
            ],
            "total": 56
          },
          "watchlater": {
            "uri": "/users/212495594/watchlater",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "shared": {
            "uri": "/users/212495594/shared/videos",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "pictures": {
            "uri": "/users/212495594/pictures",
            "options": [
              "GET",
              "POST"
            ],
            "total": 1
          },
          "watched_videos": {
            "uri": "/me/watched/videos",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "folders_root": {
            "uri": "/users/212495594/folders/root",
            "options": [
              "GET"
            ]
          },
          "folders": {
            "uri": "/users/212495594/folders",
            "options": [
              "GET",
              "POST"
            ],
            "total": 1
          },
          "teams": {
            "uri": "/users/212495594/teams",
            "options": [
              "GET"
            ],
            "total": 1
          },
          "permission_policies": {
            "uri": "/users/212495594/permission_policies",
            "options": [
              "GET"
            ],
            "total": 7
          },
          "block": {
            "uri": "/me/block",
            "options": [
              "GET"
            ],
            "total": 0
          }
        }
      },
      "location_details": {
        "formatted_address": "",
        "latitude": null,
        "longitude": null,
        "city": null,
        "state": null,
        "neighborhood": null,
        "sub_locality": null,
        "state_iso_code": null,
        "country": null,
        "country_iso_code": null
      },
      "skills": [],
      "available_for_hire": false,
      "can_work_remotely": false,
      "preferences": {
        "videos": {
          "rating": [
            "unrated"
          ],
          "privacy": {
            "view": "anybody",
            "comments": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "allow_share_link": true
          }
        },
        "webinar_registrant_lower_watermark_banner_dismissed": []
      },
      "content_filter": [
        "language",
        "drugs",
        "violence",
        "nudity",
        "safe",
        "unrated"
      ],
      "resource_key": "d1df62c60475021f05a1293fe43512955423abb3",
      "account": "starter"
    },
    "last_user_action_event_date": "2024-01-06T20:45:17+00:00",
    "parent_folder": null,
    "review_page": {
      "active": true,
      "link": "https://vimeo.com/user212495594/review/900435578/646cfb0822",
      "is_shareable": true
    },
    "app": {
      "name": "Vimeo Site",
      "uri": "/apps/58479"
    },
    "play": {
      "status": "playable"
    },
    "status": "available",
    "resource_key": "d63f2d738dd5d33e7b4a1049fa805cbb836ed3f9",
    "upload": {
      "status": "complete",
      "link": null,
      "upload_link": null,
      "form": null,
      "approach": null,
      "size": null,
      "redirect_url": null
    },
    "transcode": {
      "status": "complete"
    },
    "is_playable": true,
    "has_audio": true
  },
  {
    "uri": "/videos/900429824",
    "name": "قاعة شهرزاد2",
    "description": null,
    "type": "video",
    "link": "https://vimeo.com/900429824",
    "player_embed_url": "https://player.vimeo.com/video/900429824?h=ca02d54c0b",
    "duration": 53,
    "width": 720,
    "language": "en",
    "height": 1280,
    "embed": {
      "html": "<iframe src=\"https://player.vimeo.com/video/900429824?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=288640\" width=\"720\" height=\"1280\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture; clipboard-write\" title=\"قاعة شهرزاد2\"></iframe>",
      "badges": {
        "hdr": false,
        "live": {
          "streaming": false,
          "archived": false
        },
        "staff_pick": {
          "normal": false,
          "best_of_the_month": false,
          "best_of_the_year": false,
          "premiere": false
        },
        "vod": false,
        "weekend_challenge": false
      },
      "interactive": false,
      "buttons": {
        "watchlater": true,
        "share": true,
        "embed": true,
        "hd": false,
        "fullscreen": true,
        "scaling": true,
        "like": true
      },
      "logos": {
        "vimeo": true,
        "custom": {
          "active": false,
          "url": null,
          "link": null,
          "use_link": false,
          "sticky": false
        }
      },
      "play_button": {
        "position": "auto"
      },
      "title": {
        "name": "user",
        "owner": "user",
        "portrait": "user"
      },
      "end_screen": [],
      "playbar": true,
      "quality_selector": null,
      "pip": true,
      "autopip": true,
      "volume": true,
      "color": "00adef",
      "colors": {
        "color_one": "000000",
        "color_two": "00adef",
        "color_three": "ffffff",
        "color_four": "000000"
      },
      "event_schedule": true,
      "has_cards": false,
      "outro_type": "videos",
      "show_timezone": false,
      "cards": [],
      "airplay": true,
      "audio_tracks": true,
      "chapters": true,
      "chromecast": true,
      "closed_captions": true,
      "transcript": true,
      "uri": null,
      "email_capture_form": null,
      "speed": true
    },
    "created_time": "2024-01-06T19:59:44+00:00",
    "modified_time": "2024-01-16T11:31:43+00:00",
    "release_time": "2024-01-06T19:59:44+00:00",
    "content_rating": [
      "unrated"
    ],
    "content_rating_class": "unrated",
    "rating_mod_locked": false,
    "license": null,
    "privacy": {
      "view": "anybody",
      "embed": "public",
      "download": true,
      "add": true,
      "comments": "anybody"
    },
    "pictures": {
      "uri": "/videos/900429824/pictures/1778688866",
      "active": true,
      "type": "custom",
      "base_link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d",
      "sizes": [
        {
          "width": 100,
          "height": 75,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_100x75?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_100x75&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 200,
          "height": 150,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_200x150?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 295,
          "height": 166,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_295x166?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 640,
          "height": 360,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_640x360?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 960,
          "height": 540,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_960x540?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_960x540&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 1280,
          "height": 720,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_1280x720?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 1920,
          "height": 1080,
          "link": "https://i.vimeocdn.com/video/1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_1920x1080?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778688866-9c706b5f0cdbbb050ce53a39ae618704fb318ad0fe7f009e5410c6168593a241-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }
      ],
      "resource_key": "8afb3beebb82c177ef1fad6bf3d43c0ea1ac51d1",
      "default_picture": false
    },
    "tags": [],
    "stats": {
      "plays": 18
    },
    "categories": [],
    "uploader": {
      "pictures": {
        "uri": "/users/212495594/pictures/94254004",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/portrait/94254004",
        "sizes": [
          {
            "width": 30,
            "height": 30,
            "link": "https://i.vimeocdn.com/portrait/94254004_30x30"
          },
          {
            "width": 72,
            "height": 72,
            "link": "https://i.vimeocdn.com/portrait/94254004_72x72"
          },
          {
            "width": 75,
            "height": 75,
            "link": "https://i.vimeocdn.com/portrait/94254004_75x75"
          },
          {
            "width": 100,
            "height": 100,
            "link": "https://i.vimeocdn.com/portrait/94254004_100x100"
          },
          {
            "width": 144,
            "height": 144,
            "link": "https://i.vimeocdn.com/portrait/94254004_144x144"
          },
          {
            "width": 216,
            "height": 216,
            "link": "https://i.vimeocdn.com/portrait/94254004_216x216"
          },
          {
            "width": 288,
            "height": 288,
            "link": "https://i.vimeocdn.com/portrait/94254004_288x288"
          },
          {
            "width": 300,
            "height": 300,
            "link": "https://i.vimeocdn.com/portrait/94254004_300x300"
          },
          {
            "width": 360,
            "height": 360,
            "link": "https://i.vimeocdn.com/portrait/94254004_360x360"
          }
        ],
        "resource_key": "6c34fa630f7a065a7110ebfe196aafb8e200fc08",
        "default_picture": false
      }
    },
    "metadata": {
      "connections": {
        "comments": {
          "uri": "/videos/900429824/comments",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "credits": {
          "uri": "/videos/900429824/credits",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "likes": {
          "uri": "/videos/900429824/likes",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "pictures": {
          "uri": "/videos/900429824/pictures",
          "options": [
            "GET",
            "POST"
          ],
          "total": 1
        },
        "texttracks": {
          "uri": "/videos/900429824/texttracks",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "related": {
          "uri": "/me/videos?per_page=3&offset=2",
          "options": [
            "GET"
          ]
        },
        "recommendations": {
          "uri": "/videos/900429824/recommendations",
          "options": [
            "GET"
          ]
        },
        "albums": {
          "uri": "/videos/900429824/albums",
          "options": [
            "GET",
            "PATCH"
          ],
          "total": 0
        },
        "available_albums": {
          "uri": "/videos/900429824/available_albums",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "available_channels": {
          "uri": "/videos/900429824/available_channels",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "versions": {
          "uri": "/videos/900429824/versions",
          "options": [
            "GET"
          ],
          "total": 1,
          "current_uri": "/videos/900429824/versions/881457555",
          "resource_key": "9b7691aaf4812716a4131d8676b1238032571b5a",
          "latest_incomplete_version": null
        }
      },
      "interactions": {
        "watchlater": {
          "uri": "/users/212495594/watchlater/900429824",
          "options": [
            "GET",
            "PUT",
            "DELETE"
          ],
          "added": false,
          "added_time": null
        },
        "report": {
          "uri": "/videos/900429824/report",
          "options": [
            "POST"
          ],
          "reason": [
            "pornographic",
            "harassment",
            "ripoff",
            "incorrect rating",
            "spam",
            "causes harm",
            "csam"
          ]
        },
        "view_team_members": {
          "uri": "/videos/900429824/teammembers",
          "options": [
            "GET"
          ]
        },
        "edit": {
          "uri": "/videos/900429824",
          "options": [
            "PATCH"
          ],
          "blocked_fields": []
        },
        "edit_content_rating": {
          "uri": "/videos/900429824",
          "options": [
            "PATCH"
          ],
          "content_rating": [
            "language",
            "drugs",
            "violence",
            "nudity",
            "advertisement",
            "safe",
            "unrated"
          ]
        },
        "edit_privacy": {
          "uri": "/videos/900429824",
          "options": [
            "PATCH"
          ],
          "content_type": "application/vnd.vimeo.video",
          "properties": [
            {
              "name": "privacy.view",
              "required": true,
              "options": [
                "anybody",
                "nobody",
                "password",
                "disable",
                "unlisted"
              ]
            }
          ]
        },
        "delete": {
          "uri": "/videos/900429824",
          "options": [
            "DELETE"
          ]
        },
        "can_update_privacy_to_public": {
          "uri": "/videos/900429824",
          "options": [
            "PATCH"
          ]
        },
        "invite": {
          "uri": "/users/212495594/team_user_clip_access_grants",
          "options": [
            "GET",
            "POST"
          ]
        },
        "trim": {
          "uri": "/videos/900429824/cliptrim",
          "options": [
            "GET",
            "POST"
          ]
        },
        "validate": {
          "uri": "/videos/900429824/validate",
          "options": [
            "PUT"
          ]
        }
      },
      "is_vimeo_create": false,
      "is_screen_record": false
    },
    "manage_link": "/manage/videos/900429824",
    "user": {
      "uri": "/users/212495594",
      "name": "Alusaifer",
      "link": "https://vimeo.com/user212495594",
      "capabilities": {
        "hasLiveSubscription": false,
        "hasEnterpriseLihp": false,
        "hasSvvTimecodedComments": true,
        "hasSimplifiedEnterpriseAccount": false
      },
      "location": "",
      "gender": "",
      "bio": null,
      "short_bio": null,
      "created_time": "2023-12-10T15:11:56+00:00",
      "pictures": {
        "uri": "/users/212495594/pictures/94254004",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/portrait/94254004",
        "sizes": [
          {
            "width": 30,
            "height": 30,
            "link": "https://i.vimeocdn.com/portrait/94254004_30x30"
          },
          {
            "width": 72,
            "height": 72,
            "link": "https://i.vimeocdn.com/portrait/94254004_72x72"
          },
          {
            "width": 75,
            "height": 75,
            "link": "https://i.vimeocdn.com/portrait/94254004_75x75"
          },
          {
            "width": 100,
            "height": 100,
            "link": "https://i.vimeocdn.com/portrait/94254004_100x100"
          },
          {
            "width": 144,
            "height": 144,
            "link": "https://i.vimeocdn.com/portrait/94254004_144x144"
          },
          {
            "width": 216,
            "height": 216,
            "link": "https://i.vimeocdn.com/portrait/94254004_216x216"
          },
          {
            "width": 288,
            "height": 288,
            "link": "https://i.vimeocdn.com/portrait/94254004_288x288"
          },
          {
            "width": 300,
            "height": 300,
            "link": "https://i.vimeocdn.com/portrait/94254004_300x300"
          },
          {
            "width": 360,
            "height": 360,
            "link": "https://i.vimeocdn.com/portrait/94254004_360x360"
          }
        ],
        "resource_key": "6c34fa630f7a065a7110ebfe196aafb8e200fc08",
        "default_picture": false
      },
      "websites": [],
      "metadata": {
        "connections": {
          "albums": {
            "uri": "/users/212495594/albums",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "appearances": {
            "uri": "/users/212495594/appearances",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "categories": {
            "uri": "/users/212495594/categories",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "channels": {
            "uri": "/users/212495594/channels",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "feed": {
            "uri": "/users/212495594/feed",
            "options": [
              "GET"
            ]
          },
          "followers": {
            "uri": "/users/212495594/followers",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "following": {
            "uri": "/users/212495594/following",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "groups": {
            "uri": "/users/212495594/groups",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "likes": {
            "uri": "/users/212495594/likes",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "membership": {
            "uri": "/users/212495594/membership/",
            "options": [
              "PATCH"
            ]
          },
          "moderated_channels": {
            "uri": "/users/212495594/channels?filter=moderated",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "portfolios": {
            "uri": "/users/212495594/portfolios",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "videos": {
            "uri": "/users/212495594/videos",
            "options": [
              "GET"
            ],
            "total": 56
          },
          "watchlater": {
            "uri": "/users/212495594/watchlater",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "shared": {
            "uri": "/users/212495594/shared/videos",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "pictures": {
            "uri": "/users/212495594/pictures",
            "options": [
              "GET",
              "POST"
            ],
            "total": 1
          },
          "watched_videos": {
            "uri": "/me/watched/videos",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "folders_root": {
            "uri": "/users/212495594/folders/root",
            "options": [
              "GET"
            ]
          },
          "folders": {
            "uri": "/users/212495594/folders",
            "options": [
              "GET",
              "POST"
            ],
            "total": 1
          },
          "teams": {
            "uri": "/users/212495594/teams",
            "options": [
              "GET"
            ],
            "total": 1
          },
          "permission_policies": {
            "uri": "/users/212495594/permission_policies",
            "options": [
              "GET"
            ],
            "total": 7
          },
          "block": {
            "uri": "/me/block",
            "options": [
              "GET"
            ],
            "total": 0
          }
        }
      },
      "location_details": {
        "formatted_address": "",
        "latitude": null,
        "longitude": null,
        "city": null,
        "state": null,
        "neighborhood": null,
        "sub_locality": null,
        "state_iso_code": null,
        "country": null,
        "country_iso_code": null
      },
      "skills": [],
      "available_for_hire": false,
      "can_work_remotely": false,
      "preferences": {
        "videos": {
          "rating": [
            "unrated"
          ],
          "privacy": {
            "view": "anybody",
            "comments": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "allow_share_link": true
          }
        },
        "webinar_registrant_lower_watermark_banner_dismissed": []
      },
      "content_filter": [
        "language",
        "drugs",
        "violence",
        "nudity",
        "safe",
        "unrated"
      ],
      "resource_key": "d1df62c60475021f05a1293fe43512955423abb3",
      "account": "starter"
    },
    "last_user_action_event_date": "2024-01-06T19:59:51+00:00",
    "parent_folder": null,
    "review_page": {
      "active": true,
      "link": "https://vimeo.com/user212495594/review/900429824/63a104fcfd",
      "is_shareable": true
    },
    "app": {
      "name": "Vimeo Site",
      "uri": "/apps/58479"
    },
    "play": {
      "status": "playable"
    },
    "status": "available",
    "resource_key": "40c3485afcc40a4bfccbc5025becab995a3f7f54",
    "upload": {
      "status": "complete",
      "link": null,
      "upload_link": null,
      "form": null,
      "approach": null,
      "size": null,
      "redirect_url": null
    },
    "transcode": {
      "status": "complete"
    },
    "is_playable": true,
    "has_audio": true
  },
  {
    "uri": "/videos/900425956",
    "name": "قاعة الفخامة 2",
    "description": null,
    "type": "video",
    "link": "https://vimeo.com/900425956",
    "player_embed_url": "https://player.vimeo.com/video/900425956?h=3caae6c6d2",
    "duration": 24,
    "width": 464,
    "language": "en",
    "height": 848,
    "embed": {
      "html": "<iframe src=\"https://player.vimeo.com/video/900425956?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=288640\" width=\"464\" height=\"848\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture; clipboard-write\" title=\"قاعة الفخامة 2\"></iframe>",
      "badges": {
        "hdr": false,
        "live": {
          "streaming": false,
          "archived": false
        },
        "staff_pick": {
          "normal": false,
          "best_of_the_month": false,
          "best_of_the_year": false,
          "premiere": false
        },
        "vod": false,
        "weekend_challenge": false
      },
      "interactive": false,
      "buttons": {
        "watchlater": true,
        "share": true,
        "embed": true,
        "hd": false,
        "fullscreen": true,
        "scaling": true,
        "like": true
      },
      "logos": {
        "vimeo": true,
        "custom": {
          "active": false,
          "url": null,
          "link": null,
          "use_link": false,
          "sticky": false
        }
      },
      "play_button": {
        "position": "auto"
      },
      "title": {
        "name": "user",
        "owner": "user",
        "portrait": "user"
      },
      "end_screen": [],
      "playbar": true,
      "quality_selector": null,
      "pip": true,
      "autopip": true,
      "volume": true,
      "color": "00adef",
      "colors": {
        "color_one": "000000",
        "color_two": "00adef",
        "color_three": "ffffff",
        "color_four": "000000"
      },
      "event_schedule": true,
      "has_cards": false,
      "outro_type": "videos",
      "show_timezone": false,
      "cards": [],
      "airplay": true,
      "audio_tracks": true,
      "chapters": true,
      "chromecast": true,
      "closed_captions": true,
      "transcript": true,
      "uri": null,
      "email_capture_form": null,
      "speed": true
    },
    "created_time": "2024-01-06T19:33:28+00:00",
    "modified_time": "2024-02-24T11:55:51+00:00",
    "release_time": "2024-01-06T19:33:28+00:00",
    "content_rating": [
      "unrated"
    ],
    "content_rating_class": "unrated",
    "rating_mod_locked": false,
    "license": null,
    "privacy": {
      "view": "anybody",
      "embed": "public",
      "download": true,
      "add": true,
      "comments": "anybody"
    },
    "pictures": {
      "uri": "/videos/900425956/pictures/1778682045",
      "active": true,
      "type": "custom",
      "base_link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d",
      "sizes": [
        {
          "width": 100,
          "height": 75,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_100x75?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_100x75&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 200,
          "height": 150,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_200x150?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 295,
          "height": 166,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_295x166?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 640,
          "height": 360,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_640x360?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 960,
          "height": 540,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_960x540?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_960x540&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 1280,
          "height": 720,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_1280x720?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        },
        {
          "width": 1920,
          "height": 1080,
          "link": "https://i.vimeocdn.com/video/1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_1920x1080?r=pad",
          "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1778682045-112f4cdeae0113ee8cb208d47ba1017e77ee55dd60acca4d1b3791f16e65a0f5-d_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
        }
      ],
      "resource_key": "f67cbca851be1cae650a1d014af5d5c761d2fdaf",
      "default_picture": false
    },
    "tags": [],
    "stats": {
      "plays": 1
    },
    "categories": [],
    "uploader": {
      "pictures": {
        "uri": "/users/212495594/pictures/94254004",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/portrait/94254004",
        "sizes": [
          {
            "width": 30,
            "height": 30,
            "link": "https://i.vimeocdn.com/portrait/94254004_30x30"
          },
          {
            "width": 72,
            "height": 72,
            "link": "https://i.vimeocdn.com/portrait/94254004_72x72"
          },
          {
            "width": 75,
            "height": 75,
            "link": "https://i.vimeocdn.com/portrait/94254004_75x75"
          },
          {
            "width": 100,
            "height": 100,
            "link": "https://i.vimeocdn.com/portrait/94254004_100x100"
          },
          {
            "width": 144,
            "height": 144,
            "link": "https://i.vimeocdn.com/portrait/94254004_144x144"
          },
          {
            "width": 216,
            "height": 216,
            "link": "https://i.vimeocdn.com/portrait/94254004_216x216"
          },
          {
            "width": 288,
            "height": 288,
            "link": "https://i.vimeocdn.com/portrait/94254004_288x288"
          },
          {
            "width": 300,
            "height": 300,
            "link": "https://i.vimeocdn.com/portrait/94254004_300x300"
          },
          {
            "width": 360,
            "height": 360,
            "link": "https://i.vimeocdn.com/portrait/94254004_360x360"
          }
        ],
        "resource_key": "6c34fa630f7a065a7110ebfe196aafb8e200fc08",
        "default_picture": false
      }
    },
    "metadata": {
      "connections": {
        "comments": {
          "uri": "/videos/900425956/comments",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "credits": {
          "uri": "/videos/900425956/credits",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "likes": {
          "uri": "/videos/900425956/likes",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "pictures": {
          "uri": "/videos/900425956/pictures",
          "options": [
            "GET",
            "POST"
          ],
          "total": 1
        },
        "texttracks": {
          "uri": "/videos/900425956/texttracks",
          "options": [
            "GET",
            "POST"
          ],
          "total": 0
        },
        "related": {
          "uri": "/me/videos?per_page=3&offset=3",
          "options": [
            "GET"
          ]
        },
        "recommendations": {
          "uri": "/videos/900425956/recommendations",
          "options": [
            "GET"
          ]
        },
        "albums": {
          "uri": "/videos/900425956/albums",
          "options": [
            "GET",
            "PATCH"
          ],
          "total": 0
        },
        "available_albums": {
          "uri": "/videos/900425956/available_albums",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "available_channels": {
          "uri": "/videos/900425956/available_channels",
          "options": [
            "GET"
          ],
          "total": 0
        },
        "versions": {
          "uri": "/videos/900425956/versions",
          "options": [
            "GET"
          ],
          "total": 1,
          "current_uri": "/videos/900425956/versions/881453348",
          "resource_key": "90492b21de89ff20e255014d8bfe1403527d17ac",
          "latest_incomplete_version": null
        }
      },
      "interactions": {
        "watchlater": {
          "uri": "/users/212495594/watchlater/900425956",
          "options": [
            "GET",
            "PUT",
            "DELETE"
          ],
          "added": false,
          "added_time": null
        },
        "report": {
          "uri": "/videos/900425956/report",
          "options": [
            "POST"
          ],
          "reason": [
            "pornographic",
            "harassment",
            "ripoff",
            "incorrect rating",
            "spam",
            "causes harm",
            "csam"
          ]
        },
        "view_team_members": {
          "uri": "/videos/900425956/teammembers",
          "options": [
            "GET"
          ]
        },
        "edit": {
          "uri": "/videos/900425956",
          "options": [
            "PATCH"
          ],
          "blocked_fields": []
        },
        "edit_content_rating": {
          "uri": "/videos/900425956",
          "options": [
            "PATCH"
          ],
          "content_rating": [
            "language",
            "drugs",
            "violence",
            "nudity",
            "advertisement",
            "safe",
            "unrated"
          ]
        },
        "edit_privacy": {
          "uri": "/videos/900425956",
          "options": [
            "PATCH"
          ],
          "content_type": "application/vnd.vimeo.video",
          "properties": [
            {
              "name": "privacy.view",
              "required": true,
              "options": [
                "anybody",
                "nobody",
                "password",
                "disable",
                "unlisted"
              ]
            }
          ]
        },
        "delete": {
          "uri": "/videos/900425956",
          "options": [
            "DELETE"
          ]
        },
        "can_update_privacy_to_public": {
          "uri": "/videos/900425956",
          "options": [
            "PATCH"
          ]
        },
        "invite": {
          "uri": "/users/212495594/team_user_clip_access_grants",
          "options": [
            "GET",
            "POST"
          ]
        },
        "trim": {
          "uri": "/videos/900425956/cliptrim",
          "options": [
            "GET",
            "POST"
          ]
        },
        "validate": {
          "uri": "/videos/900425956/validate",
          "options": [
            "PUT"
          ]
        }
      },
      "is_vimeo_create": false,
      "is_screen_record": false
    },
    "manage_link": "/manage/videos/900425956",
    "user": {
      "uri": "/users/212495594",
      "name": "Alusaifer",
      "link": "https://vimeo.com/user212495594",
      "capabilities": {
        "hasLiveSubscription": false,
        "hasEnterpriseLihp": false,
        "hasSvvTimecodedComments": true,
        "hasSimplifiedEnterpriseAccount": false
      },
      "location": "",
      "gender": "",
      "bio": null,
      "short_bio": null,
      "created_time": "2023-12-10T15:11:56+00:00",
      "pictures": {
        "uri": "/users/212495594/pictures/94254004",
        "active": true,
        "type": "custom",
        "base_link": "https://i.vimeocdn.com/portrait/94254004",
        "sizes": [
          {
            "width": 30,
            "height": 30,
            "link": "https://i.vimeocdn.com/portrait/94254004_30x30"
          },
          {
            "width": 72,
            "height": 72,
            "link": "https://i.vimeocdn.com/portrait/94254004_72x72"
          },
          {
            "width": 75,
            "height": 75,
            "link": "https://i.vimeocdn.com/portrait/94254004_75x75"
          },
          {
            "width": 100,
            "height": 100,
            "link": "https://i.vimeocdn.com/portrait/94254004_100x100"
          },
          {
            "width": 144,
            "height": 144,
            "link": "https://i.vimeocdn.com/portrait/94254004_144x144"
          },
          {
            "width": 216,
            "height": 216,
            "link": "https://i.vimeocdn.com/portrait/94254004_216x216"
          },
          {
            "width": 288,
            "height": 288,
            "link": "https://i.vimeocdn.com/portrait/94254004_288x288"
          },
          {
            "width": 300,
            "height": 300,
            "link": "https://i.vimeocdn.com/portrait/94254004_300x300"
          },
          {
            "width": 360,
            "height": 360,
            "link": "https://i.vimeocdn.com/portrait/94254004_360x360"
          }
        ],
        "resource_key": "6c34fa630f7a065a7110ebfe196aafb8e200fc08",
        "default_picture": false
      },
      "websites": [],
      "metadata": {
        "connections": {
          "albums": {
            "uri": "/users/212495594/albums",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "appearances": {
            "uri": "/users/212495594/appearances",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "categories": {
            "uri": "/users/212495594/categories",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "channels": {
            "uri": "/users/212495594/channels",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "feed": {
            "uri": "/users/212495594/feed",
            "options": [
              "GET"
            ]
          },
          "followers": {
            "uri": "/users/212495594/followers",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "following": {
            "uri": "/users/212495594/following",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "groups": {
            "uri": "/users/212495594/groups",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "likes": {
            "uri": "/users/212495594/likes",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "membership": {
            "uri": "/users/212495594/membership/",
            "options": [
              "PATCH"
            ]
          },
          "moderated_channels": {
            "uri": "/users/212495594/channels?filter=moderated",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "portfolios": {
            "uri": "/users/212495594/portfolios",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "videos": {
            "uri": "/users/212495594/videos",
            "options": [
              "GET"
            ],
            "total": 56
          },
          "watchlater": {
            "uri": "/users/212495594/watchlater",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "shared": {
            "uri": "/users/212495594/shared/videos",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "pictures": {
            "uri": "/users/212495594/pictures",
            "options": [
              "GET",
              "POST"
            ],
            "total": 1
          },
          "watched_videos": {
            "uri": "/me/watched/videos",
            "options": [
              "GET"
            ],
            "total": 0
          },
          "folders_root": {
            "uri": "/users/212495594/folders/root",
            "options": [
              "GET"
            ]
          },
          "folders": {
            "uri": "/users/212495594/folders",
            "options": [
              "GET",
              "POST"
            ],
            "total": 1
          },
          "teams": {
            "uri": "/users/212495594/teams",
            "options": [
              "GET"
            ],
            "total": 1
          },
          "permission_policies": {
            "uri": "/users/212495594/permission_policies",
            "options": [
              "GET"
            ],
            "total": 7
          },
          "block": {
            "uri": "/me/block",
            "options": [
              "GET"
            ],
            "total": 0
          }
        }
      },
      "location_details": {
        "formatted_address": "",
        "latitude": null,
        "longitude": null,
        "city": null,
        "state": null,
        "neighborhood": null,
        "sub_locality": null,
        "state_iso_code": null,
        "country": null,
        "country_iso_code": null
      },
      "skills": [],
      "available_for_hire": false,
      "can_work_remotely": false,
      "preferences": {
        "videos": {
          "rating": [
            "unrated"
          ],
          "privacy": {
            "view": "anybody",
            "comments": "anybody",
            "embed": "public",
            "download": true,
            "add": true,
            "allow_share_link": true
          }
        },
        "webinar_registrant_lower_watermark_banner_dismissed": []
      },
      "content_filter": [
        "language",
        "drugs",
        "violence",
        "nudity",
        "safe",
        "unrated"
      ],
      "resource_key": "d1df62c60475021f05a1293fe43512955423abb3",
      "account": "starter"
    },
    "last_user_action_event_date": "2024-01-06T19:33:34+00:00",
    "parent_folder": null,
    "review_page": {
      "active": true,
      "link": "https://vimeo.com/user212495594/review/900425956/e4d09db049",
      "is_shareable": true
    },
    "app": {
      "name": "Vimeo Site",
      "uri": "/apps/58479"
    },
    "play": {
      "status": "playable"
    },
    "status": "available",
    "resource_key": "ea18656d5eb8d9b78e7263eba4e5fe86c72daba4",
    "upload": {
      "status": "complete",
      "link": null,
      "upload_link": null,
      "form": null,
      "approach": null,
      "size": null,
      "redirect_url": null
    },
    "transcode": {
      "status": "complete"
    },
    "is_playable": true,
    "has_audio": true
  }
]
const VideoItem = ({ image, title, uri, additionalClassname }) => {

  // function TeamItem({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);

  function openVideoDialog() {
    document.getElementById('videoDialog').querySelector('iframe').src = `https://player.vimeo.com/video/${uri.match(/\/(\d+)$/)[1]}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=288640`;
    document.getElementById('videoDialog').showModal();
  }
  function closeVideoDialog() {
    document.getElementById('videoDialog').close();
  }

  return (
    <>
      <dialog id="videoDialog">

        <button className="closeBtn" onClick={closeVideoDialog}>X</button>
        <iframe src={``} style={{ width: "100%" }} height="500" width={"500"} frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title={title}></iframe>
        {/* <iframe src={``} style={{ width: "100%" }} height="500" width={"500"}  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write\" title={title}></iframe> */}
      </dialog>

      <div className={`ltn__team-item ${additionalClassname}`}>
        <div className="ltn__video-img ltn__animation-pulse1" style={{ height: "20rem", width: "100%" }}>
          <img src={image} alt="video popup bg image" style={{ height: "inherit", width: '100%', objectFit: 'cover' }} />
          <button
            onClick={() => openVideoDialog(true)}
            className="ltn__video-icon-2"
          >
            <FaPlay />
          </button>
        </div>
        <div className="team-info">
          <h4>
            {title}
          </h4>
          {/* <div className="ltn__social-media">
            <ul>
              <li>
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default VideoItem;
