module.exports = {
    client: {
        token: 'MTIyOTc5MDk2ODcxNTQxMTU1Ng.GnmCfh.tARzJ8duiVG5sZDZuLTDROY7ZNOx0mn8hRVMGY', // ← Your bot token (.env IS RECOMMENDED)
        id: '1229790968715411556' // ← Your bot ID
    },
    modmail: {
        guildId: '1228288316974043147', // ← Your server ID
        categoryId: '1229783163664990301', // ← The modmail category ID
        staffRoles: ['1228289771743219805'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: 'https://discord.com/api/webhooks/1229801163013230703/4eQD74EKd8Dy1LUrbxAvbcr2nlOZVJfLpKjlhTAB6RQz8lLEXyBUOs_jXvuZ5Ou6Avt_' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};