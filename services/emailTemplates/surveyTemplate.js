const keys = require('../../config/keys')

module.exports = survey => {
  return `
  <html>
  <head>
  </head>
    <body>
        <div style="text-align: center;">
            <h3>I'd like your input</h3>
            <p>Please answer the following question:</p>
            <p>${survey.body}</p>
            <div class="row">
                <div class="btn btn-flat">
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div class="btn btn-flat">
                    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </div>
        </div>
    </body>
  </html>
  `;
};
