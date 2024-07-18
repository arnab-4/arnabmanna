const asciify = require('asciify-image');
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');
const Table = require('cli-table3');

/**
 * Content of digitial card
 */
const data = {
    handle: 'arnabmanna',
    name: chalk.white.bold('Arnab Manna'),
    bio: chalk.gray('Developer 🧑‍💻'),
    github: chalk.gray('https://github.com/') + chalk.cyanBright('arnab-4'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyanBright('Arnabmannadev'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyanBright('arnab-manna-442586240'),
    wakatime: chalk.gray('https://wakatime.com/') + chalk.cyan('@arnabdev'),
    web: chalk.gray('https://') + chalk.cyanBright('arnab-portfolio-v2.vercel.app/'),
    npx: chalk.cyanBright('npx arnabmanna'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelWaka: chalk.white.bold(' WakaTime:'),
    labelWeb: chalk.white.bold('       Web:'),
    labelCard: chalk.white.bold('   Card:')
};

const banner = figlet.textSync(data.handle, { verticalLayout: 'full' });
const heading = data.name;
const bio = data.bio;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const wakatime = `${data.labelWaka}  ${data.wakatime}`;
const discord = `${data.labelDiscord}  ${data.discord}`;
const card = `${data.labelCard}  ${data.npx}`;
const web = `${data.labelWeb}  ${data.web}`;

/**
 * Options for the avatar image
 */
const avatarImageOptions = {
    fit: 'box',
    width: '22',
    height: '22'
};
const avatarImagePath = path.join(__dirname, 'assets/avatar.jpg');

(async () => {
    const avatar = await asciify(avatarImagePath, avatarImageOptions);
    const output =  banner + '\n' + '\n' +
                    heading + '\n' +
                    bio + '\n' + '\n' +
                    linkedin + '\n' +
                    github + '\n' +
                    twitter + '\n' +
                    wakatime + '\n' +
                    web + '\n';
    const table = new Table();
    table.push([
        { rowSpan: 2, content: avatar},
        { content: output, vAlign: 'center' }
    ],[
        { content: card, hAlign: 'right', vAlign: 'center'}
    ]);
    fs.writeFileSync(path.join(__dirname, 'bin/output'), table.toString());
})();
