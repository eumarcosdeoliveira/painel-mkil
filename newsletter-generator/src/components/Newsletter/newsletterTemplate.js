// src/components/newsletter/newsletterTemplate.js

export const generateNewsletterHTML = (selected, preheader) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
        <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0 font-family: 'Montserrat', sans-serif;
                background-color: #242846;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }
    
            .image_block img+div {
                display: none;
            }
    
            sup,
            sub {
                font-size: 75%;
                line-height: 0;
            }
    
            @media (max-width:670px) {
    
                .desktop_hide table.icons-inner,
                .row-23 .column-2 .block-1.social_block .alignment table,
                .social_block.desktop_hide .social-table {
                    display: inline-block !important;
                }
    
                .icons-inner {
                    text-align: center;
                }
    
                .icons-inner td {
                    margin: 0 auto;
                }
    
                .image_block div.fullWidth {
                    max-width: 100% !important;
                }
    
                .mobile_hide {
                    display: none;
                }
    
                .row-content {
                    width: 100% !important;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
    
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }
    
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
    
                .reverse {
                    display: table;
                    width: 100%;
                }
    
                .reverse .column.first {
                    display: table-footer-group !important;
                }
    
                .reverse .column.last {
                    display: table-header-group !important;
                }
    
                .row-8 td.column.first .border,
                .row-8 td.column.last .border {
                    padding: 10px;
                    border-top: 0;
                    border-right: 0px;
                    border-bottom: 0;
                    border-left: 0;
                }
    
                .row-11 td.column.first .border,
                .row-11 td.column.last .border,
                .row-12 td.column.first .border,
                .row-12 td.column.last .border,
                .row-13 td.column.first .border,
                .row-13 td.column.last .border,
                .row-16 td.column.first .border,
                .row-16 td.column.last .border,
                .row-9 td.column.first .border,
                .row-9 td.column.last .border {
                    padding: 15px;
                    border-top: 0;
                    border-right: 0px;
                    border-bottom: 0;
                    border-left: 0;
                }
    
                .row-18 td.column.first .border {
                    padding: 20px;
                    border-top: 0;
                    border-right: 0px;
                    border-bottom: 0;
                    border-left: 0;
                }
    
                .row-18 td.column.last .border {
                    padding: 5px 0;
                    border-top: 0;
                    border-right: 0px;
                    border-bottom: 0;
                    border-left: 0;
                }
    
                .row-1 .column-1 .block-5.image_block td.pad,
                .row-1 .column-1 .block-7.image_block td.pad,
                .row-10 .column-1 .block-2.image_block td.pad {
                    padding: 0 !important;
                }
    
                .row-11 .column-1 .block-5.spacer_block,
                .row-12 .column-1 .block-5.spacer_block {
                    height: 1px !important;
                }
    
                .row-22 .column-1 .block-2.image_block td.pad {
                    padding: 0 10px !important;
                }
    
                .row-23 .column-1 .block-1.image_block .alignment div,
                .row-23 .column-1 .block-2.image_block .alignment div {
                    margin: 0 auto !important;
                }
    
                .row-23 .column-1 .block-4.text_block td.pad {
                    padding: 10px 10px 10px 15px !important;
                }
    
                .row-23 .column-2 .block-1.social_block .alignment {
                    text-align: center !important;
                }
            }
    
            .row-content {
                width: 650px;
                margin: 0 auto;
                background-color: #ffffff;
                color: #000000;
                border-radius: 0;
            }
    
            .row-content-black {
                width: 650px;
                margin: 0 auto;
                background-color: #131313;
                color: #000000;
                border-radius: 0;
            }

            .settlement-container{
                width: 650px;
                margin: 0 auto;
                background-color: #a52122;
                color:rgb(255, 255, 255);
                border-radius: 0;
            }
    
            .column {
                vertical-align: top;
                padding: 10px;
            }
    
            .image {
                width: 100%;
                border-radius: 16px;
                display: block;
            }
    
            .title {
                font-size: 22px;
                font-weight: 700;
                margin: 0 0 10px 0;
            }
    
            .text {
                font-size: 16px;
                line-height: 1.5;
                color: #393d47;
                margin-bottom: 16px;
            }
    
            .button {
                display: inline-block;
                background-color: #242846;
                color: #ffffff;
                padding: 10px 20px;
                border-radius: 8px;
                text-decoration: none;
                font-size: 16px;
            }

            .button-settlement {
                display: inline-block;
                background-color: #242846;
                color: #ffffff;
                padding: 10px 20px;
                border-radius: 8px;
                text-decoration: none;
                font-size: 16px;
                margin-top: 20px;
                width: 100%;
            }
        </style>
    </head>
    
    <body class="body"
        style="background-color: #242846; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace: 0pt; padding-left: 15px; padding-right: 15px; mso-table-rspace: 0pt; background-color: #242846; background-repeat: no-repeat; background-size: cover;  margin-bottom: 3%;">

            <!-- Preheader -->
      <div style="display: none; max-height: 0px; overflow: hidden;">
        ${preheader}
        &#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;
      </div>

            <tbody>
                <tr>
                    <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #242846; border-radius: 0; color: #000000; width: 650px; margin: 0 auto; margin-top: 3%;"
                            width="650">
                            <tbody>
                                <tr>
                                    <td class="column column-1" width="100%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
                                        <div class="spacer_block block-1"
                                            style="height:10px;line-height:10px;font-size:1px;">&#8202;</div>
    
                                        <table class="image_block block-3" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation">
                                            <tr>
                                                <td class="pad" style="width:100%;">
                                                    <div class="alignment" align="center">
                                                        <div style="max-width: 195px;">
                                                            <img src="https://1drv.ms/i/s!Ao00jXjLDiFqvv941_y74hibxu1-0g?embed=1&width=6947&height=1565"
                                                                style="display: block; height: auto; border: 0; width: 100%;"
                                                                width="195" alt title="">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="spacer_block block-4"
                                            style="height:30px;line-height:30px;font-size:1px;">&#8202;
                                        </div>
                                        <table class="image_block block-5" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="width:100%;">
                                                    <div class="alignment" align="center" style="line-height:10px">
                                                        <div style="max-width: 650px;"><a href="https://callkellycall4.com/"
                                                                target="_blank" style="outline:none" tabindex="-1"><img
                                                                    src="https://1drv.ms/i/s!Ao00jXjLDiFqwqEEkAKqu-ctJ5Irig?embed=1&width=1915&height=1080"
                                                                    style="display: block; height: auto; border: 0; width: 100%;"
                                                                    width="650" alt title="" height="auto"></a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="spacer_block block-6"
                                            style="height:40px;line-height:40px;font-size:1px;">&#8202;
                                        </div>
                                        <table class="image_block block-7" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                    <div class="alignment" align="center" style="line-height:10px">
                                                        <div class="fullWidth" style="max-width: 650px;"><a
                                                                href="https://callkellycall4.com/" target="_blank"
                                                                style="outline:none" tabindex="-1"><img
                                                                    src="https://ci3.googleusercontent.com/meips/ADKq_NaGX8DYnLMOiW1xZudj26jQQQ9Q8U6CnzrDX74r08rX-xm1u2fCq8hGJLl2IWoyR89GmDe4Sxov28KlXypa9ffj1H4D9s1yU71rgRi9M8fhxxAdV3sy0e2X8RfiPdrsE8eXqksntTrmQ5y32w=s0-d-e1-ft#https://files.constantcontact.com/18f29591801/8fce4d9c-b466-44b9-90bb-a209b33d8b36.gif"
                                                                    style="display: block; height: auto; border: 0; width: 100%; border-radius: 16px;"
                                                                    width="650" alt title="" height="auto"></a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
    
                                        <div class="spacer_block block-6"
                                            style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
    
        
                        <!-- Container Branco para Posts do Instagram -->
  <div class="white-container"
      style="background-color: #FFFFFF; border-radius: 10px; padding: 20px; width: 650px; margin: 20px auto;">
      ${selected
        .filter(post => post.media_type !== "WEBSITE_POST" && !post.isSettlement) // Removendo os Settlements
        .map(post => `
          <table class="row" width="100%" cellpadding="0" cellspacing="0"
              style="padding: 15px; width: 100%;">
              <tr>
                  <td>
                      <table class="row-content" cellpadding="0" cellspacing="0" width="100%"
                          style="width: 100%;">
                          <tr>
                              <td class="column" width="33%"
                                  style="text-align: center; vertical-align: middle; width: 33%;">
                                  <a href="${post.permalink}" target="_blank"
                                      style="display: block; width: 100%;">
                                      <img src="${post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}" 
                                          alt="Post image" class="image"
                                          style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 5px; display: block;" />
                                  </a>
                              </td>
                              <td class="column" width="67%" style="width: 67%; padding-left: 10px;">
                                  <h2 class="title" style="word-wrap: break-word; margin: 0;">
                                      ${post.title}</h2>
                                  <p class="text" style="word-wrap: break-word; margin: 5px 0;">
                                      ${post.ia_description}</p>
                                  <a href="${post.permalink}" target="_blank" class="button"
                                      style="display: inline-block; margin-top: 10px;">See more </a>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      `).join("")}
  </div>

  <!-- Container Vermelho para Posts de Settlement -->
  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 50px auto;" width="650">
                                        
                                                    <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                        <tr>
                                                            <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                <div class="alignment" align="center" style="line-height:10px">
                                                                    <div class="fullWidth" style="max-width: 650px;">
                                                                        <img src="https://ci3.googleusercontent.com/meips/ADKq_Na-imYIZFtc3s5AS0_Zev54yISmMbB9l2-iQOiRkv1p8DtqEZm5tghN3t4glgV__rsVzNXsle8CE_BTq-PiKV50bCp2DF9MVolJawpdeaBnEfPe01ICjdemZILDYTZWDsrcH2t4TMdCUmpaLw=s0-d-e1-ft#https://files.constantcontact.com/18f29591801/08f59625-b9c0-4117-93b5-dcdb63f23f4d.gif" style="display: block; height: auto; border: 0; width: 100%; border-radius: 15px 15px 0px 0px;" width="650" alt title="" height="auto">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                               
  <div class="settlement-container"
      style="background-color: #a52122; border-radius: 0px 0px 10px 10px; padding: 20px; width: 650px; margin: 0px auto; color: white;">
      ${selected
        .filter(post => post.media_type !== "WEBSITE_POST" && post.isSettlement) // Apenas os Settlements
        .map(post => `
          <table class="row" width="100%" cellpadding="0" cellspacing="0"
              style="padding: 15px; width: 100%;">
              <tr>
                  <td>
                      <table class="settlement-container" cellpadding="0" cellspacing="0" width="100%"
                          style="width: 100%;">
                          <tr>
                              <td class="column" width="100%"
                                  style="text-align: center; vertical-align: middle;">
                                  <a href="${post.permalink}" target="_blank"
                                      style="display: block; width: 100%;">
                                      <img src="${post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}" 
                                          alt="Post image" class="image"
                                          style="width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 5px; display: block;" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td class="column" width="100%" style="text-align: center; padding-top: 10px;">
                                  <h2 class="title" style="word-wrap: break-word; color: #FFFFFF; font-weight: bold; margin: 0;">
                                      ${post.title}</h2>
                                  <p class="text" style="word-wrap: break-word; margin: 5px 0; font-weight: normal; color: white;">
                                      ${post.ia_description}</p>
                                  <a href="${post.permalink}" target="_blank" class="button-settlement"
                                      style="display: inline-block; margin-top: 10px; color: white; text-decoration: underline;">See more </a>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      `).join("")}
  </div>

                        <!-- Posts de Website sem Background -->
                        <div class="website-container" style="width: 650px; margin: 50px auto;">
                            ${selected.filter(post => post.media_type === "WEBSITE_POST").map(post => `
                            <table class="row" width="100%" cellpadding="0" cellspacing="0"
                                style=" margin-bottom: 30px; width: 100%;">
                                <tr>
                                    <td>
                                        <table class="row-content" cellpadding="0" cellspacing="0" width="100%"
                                            style="width: 100%;">
                                            <tr>
                                                <td class="column" width="100%"
                                                    style="width: 100%; padding-left: 10px; background-color: #242846;">
                                                    <h2 class="title"
                                                        style="word-wrap: break-word; margin: 0; font-weight: bold; color: white;">
                                                        ${post.title}</h2>
                                                    <p class="Author" style="margin: 5px 0; font-weight: 300; color: white;">From
                                                        ${post.Author}</p>
                                                    <p class="text"
                                                        style="word-wrap: break-word; margin: 5px 0; font-weight: 400; color: white;">
                                                        ${post.caption}</p>
                                                    <a href="${post.permalink}" target="_blank" class="button"
                                                        style="display: inline-block; margin-top: 10px; background-color: #a52122; color: white;">Read more</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            `).join("")}
                        </div>
    
    
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="row row-20" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131313;">
            <tbody>
                <tr>
                    <td>
                        <table class="row-content-black stack" align="center" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0;  color: #000000; width: 650px; margin: 0 auto;"
                            width="650">
                            <tbody>
                                <tr>
                                    <td class="column column-1" width="100%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <div class="spacer_block block-1"
                                            style="height:45px;line-height:45px;font-size:1px;">&#8202;
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="row row-21" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131313; padding-left: 15px; padding-right: 15px;">
            <tbody>
                <tr>
                    <td>
                        <table class="row-content-black stack" align="center" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;"
                            width="650">
                            <tbody>
                                <tr>
                                    <td class="column column-1" width="33.333333333333336%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="padding-left:20px;text-align:center;width:100%;">
                                                    <h1
                                                        style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;">
                                                        <strong>About Us</strong>
                                                    </h1>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-2" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/about-us/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">About Our
                                                                        Firm</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-3" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/contact-us/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Contacts</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-4" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/verdicts-and-settlements/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Verdicts &
                                                                        Settlements</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-5" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/testimonials/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Client
                                                                        Testimonials</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-6" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/blog/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Blog</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-7" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/about-us/michael-kelly/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Michael D.
                                                                        Kelly</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-8" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/kelly-in-the-community/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Kelly In The
                                                                        Community</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-9" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/areas-we-serve/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Areas We
                                                                        Serve</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="column column-2" width="33.333333333333336%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="padding-left:20px;text-align:center;width:100%;">
                                                    <h1
                                                        style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;">
                                                        <strong>Links</strong>
                                                    </h1>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-2" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/" target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Boston Personal
                                                                        Injury Lawyer</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-3" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/car-accident-lawyer/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Car Accident
                                                                        Attorney</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-4" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/truck-accident-attorney/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Truck Accident
                                                                        Lawyer</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-5" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/motorcycle-accident-lawyer/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Motorcycle Accident
                                                                        Lawyer</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-6" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/workers-compensation-lawyer/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener">Workers’ Compensation
                                                                        Lawyer</a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="column column-3" width="33.333333333333336%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <table class="heading_block block-1" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="padding-left:20px;text-align:center;width:100%;">
                                                    <h1
                                                        style="margin: 0; color: #ffffff; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;">
                                                        <strong>Contact</strong>
                                                    </h1>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-2" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; mso-line-height-alt: 14.399999999999999px;">
                                                                <span style="word-break: break-word; font-size: 14px;"><a
                                                                        href="https://callkellycall4.com/contact-us/"
                                                                        target="_blank"
                                                                        style="text-decoration: none; color: #ffffff;"
                                                                        rel="noopener"><span
                                                                            style="word-break: break-word; font-size: 14px;">Contact-us</span></a></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="row row-22" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-left: 15px; padding-right: 15px; background-color: #131313;">
            <tbody>
                <tr>
                    <td>
                        <table class="row-content-black stack" align="center" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
                            width="650">
                            <tbody>
                                <tr>
                                    <td class="column column-1" width="100%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <div class="spacer_block block-1"
                                            style="height:45px;line-height:45px;font-size:1px;">&#8202;
                                        </div>
                                        <table class="image_block block-2" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                    <div class="alignment" align="center" style="line-height:10px">
                                                        <div class="fullWidth" style="max-width: 650px;">
                                                            <img src="https://ci3.googleusercontent.com/meips/ADKq_NZj6q16VopKxYF_QCKDLML6NtrzyuW9opslFNJ1rh5MbeaZcRoVgvvBfdUXYMBAVfGvur4LZSjOZ3Ao5Mcyfva7aTqcTGSXqEe7ngRf5NDPHdxVfDVkpGAeBhMYqFyTGt8bCR_TguuAXLeJtA=s0-d-e1-ft#https://files.constantcontact.com/18f29591801/d671c559-2a09-4abc-84e7-ae8bfe485a39.png"
                                                                style="display: block; height: auto; border: 0; width: 100%; border-radius: 16px;"
                                                                width="650" alt title="" height="auto">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="row row-23" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace: 0pt; padding-left: 15px; padding-right: 15px; mso-table-rspace: 0pt; background-color: #131313;">
            <tbody>
                <tr>
                    <td>
                        <table class="row-content-black stack" align="center" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;"
                            width="650">
                            <tbody>
                                <tr>
                                    <td class="column column-1" width="66.66666666666667%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 30px; vertical-align: bottom; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <table class="image_block block-1" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                    <div class="alignment" align="left" style="line-height:10px">
                                                        <div style="max-width: 195px;"><img
                                                                src="https://1drv.ms/i/s!Ao00jXjLDiFqvv941_y74hibxu1-0g?embed=1&width=6947&height=1565"
                                                                style="display: block; height: auto; border: 0; width: 100%;"
                                                                width="195" alt title="" height="auto">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="image_block block-2" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-top:15px;width:100%;padding-right:0px;padding-left:0px;">
                                                    <div class="alignment" align="left" style="line-height:10px">
                                                        <div style="max-width: 87px;"><a
                                                                href="https://www.bbb.org/us/ma/boston/profile/personal-injury-lawyer/michael-kelly-injury-lawyers-0021-143389"
                                                                target="_blank" style="outline:none" tabindex="-1"><img
                                                                    src="https://callkellycall4.com/wp-content/uploads/2024/06/bbb-logo@2x.png"
                                                                    style="display: block; height: auto; border: 0; width: 100%;"
                                                                    width="87" alt title="" height="auto"></a></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <div class="spacer_block block-3"
                                            style="height:30px;line-height:30px;font-size:1px;">&#8202;
                                        </div>
                                        <table class="text_block block-4" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-right:20px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; font-size: 13px; text-align: center; mso-line-height-alt: 15.6px;">
                                                                <span
                                                                    style="word-break: break-word; font-size: 12px; background-color: transparent;">83
                                                                    Atlantic Ave, Suite 202, Boston, MA
                                                                    02110, United States</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="column column-2" width="33.333333333333336%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 20px; padding-top: 30px; vertical-align: bottom; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <table class="social_block block-1" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                            <tr>
                                                <td class="pad"
                                                    style="text-align:right;padding-right:0px;padding-left:0px;">
                                                    <div class="alignment" align="right">
                                                        <table class="social-table" width="144px" border="0" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                            <tr>
                                                                <td style="padding:0 0 0 4px;"><a
                                                                        href="https://www.facebook.com/bostonpersonalinjuryattorney"
                                                                        target="_blank"><img
                                                                            src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png"
                                                                            width="32" height="auto" alt="Facebook"
                                                                            title="facebook"
                                                                            style="display: block; height: auto; border: 0;"></a>
                                                                </td>
                                                                <td style="padding:0 0 0 4px;"><a
                                                                        href="https://x.com/mkinjurylawyers"
                                                                        target="_blank"><img
                                                                            src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png"
                                                                            width="32" height="auto" alt="Twitter"
                                                                            title="twitter"
                                                                            style="display: block; height: auto; border: 0;"></a>
                                                                </td>
                                                                <td style="padding:0 0 0 4px;"><a
                                                                        href="https://www.linkedin.com/company/michael-kelly-injury-lawyers/"
                                                                        target="_blank"><img
                                                                            src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png"
                                                                            width="32" height="auto" alt="Linkedin"
                                                                            title="linkedin"
                                                                            style="display: block; height: auto; border: 0;"></a>
                                                                </td>
                                                                <td style="padding:0 0 0 4px;"><a
                                                                        href="https://www.instagram.com/mkinjurylawyers/"
                                                                        target="_blank"><img
                                                                            src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png"
                                                                            width="32" height="auto" alt="Instagram"
                                                                            title="instagram"
                                                                            style="display: block; height: auto; border: 0;"></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="text_block block-2" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:5px;padding-top:10px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;">
                                                            <p
                                                                style="margin: 0; font-size: 13px; text-align: center; mso-line-height-alt: 15.6px;">
                                                                <span
                                                                    style="word-break: break-word; font-size: 12px; background-color: transparent;">Phone:
                                                                    (617) 444-4444</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="row row-24" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131313; padding-left: 15px; padding-right: 15px; background-color: white;">
            <tbody>
                <tr>
                    <td>
                        <table class="row-content-black  stack" align="center" border="0" cellpadding="0" cellspacing="0"
                            role="presentation"
                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto; background-color: white;"
                            width="650">
                            <tbody>
                                <tr>
                                    <td class="column column-1" width="100%"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 20px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                        <table class="text_block block-1" width="100%" border="0" cellpadding="0"
                                            cellspacing="0" role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                            <tr>
                                                <td class="pad"
                                                    style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:5px;">
                                                    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
                                                        <div class=""
                                                            style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2;  text-align: center;">
                                                            <p
                                                                style="margin: 0; font-size: 13px; mso-line-height-alt: 15.6px;">
                                                                <span
                                                                    style="word-break: break-word; font-size: 14px; background-color: transparent;">Copyright
                                                                    © 2024 Michael Kelly Injury Lawyers. All
                                                                    Rights Reserved.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
    
    
    </html>
    `;
    };