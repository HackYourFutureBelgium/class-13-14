'use strict';

const renderCoach = (coach, mainData) =>
  `<table><tr>\n` +
  `  <td><img src='./admin/avatars/coaches/${coach.userName}.jpeg' height="150px" width="150px" alt='${coach.name}' /></td>\n` +
  `  <td> <h3 display="inline">${coach.name}</h3>\n` +
  `    <ul>\n` +
  (coach.homePage
    ? `        <li>about: <a href="${coach.homePage}">home page</a></li>\n`
    : '') +
  `        <li>github: <a href="https://github.com/${coach.userName}" >${coach.userName}</a></li>\n` +
  `        <li>issues: <a href="https://github.com/${mainData.repoUserName}/${mainData.repoName}/issues?q=author%3A${coach.userName}" >authored</a>, <a href="https://github.com/${mainData.userName}/${mainData.repoName}/issues?q=assignee%3A${coach.userName}" >assigned</a></li>\n` +
  (Array.isArray(coach.modules)
    ? coach.modules
        .map(modName => `<li><code>${modName}</code></li>`)
        .reduce((mods, mod) => mods + '\n' + mod)
    : '') +
  `    </ul>\n` +
  `  </td>\n` +
  `</tr></table>`;

module.exports = renderCoach;
