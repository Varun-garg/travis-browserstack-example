const tests = {
    'Test local': (browser) => {
        return browser
            .url('http://localhost:8080')
            .waitForElementVisible('body', 1000)
            .assert.containsText('h1', 'Test page')
            .end();
    }
};

module.exports = tests;
