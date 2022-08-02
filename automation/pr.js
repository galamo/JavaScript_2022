const { director, goto, element, elements, perform, have, stage } = require("playright")

describe('Todomvc', () => {
    beforeAll(async () => {
        jest.setTimeout(60 * 1000);
        director.assign({ launchOptions: { headless: false } }); // true by default
    })
    afterEach(async () => {
        await director.dispose();
    });

    it('should complete todo', async () => {
        await goto('http://todomvc.com/examples/emberjs');
        await element('#new-todo').type('a').then(perform.press('Enter'));
        await element('#new-todo').type('b').then(perform.press('Enter'));
        await element('#new-todo').type('c').then(perform.press('Enter'));
        await element('#new-todo').type('d').then(perform.press('Enter'));
        await elements('#todo-list li').should(have.texts('a', 'b', 'c', 'd'));

        await elements('#todo-list li').first.element('.toggle').click();
        await elements('#todo-list li').element(2).element('.toggle').click();
        await elements('#todo-list li').firstBy(have.text('d')).element('.toggle').click();

        await elements('#todo-list li').by(have.cssClass('completed')).should(have.texts('a', 'b', 'd'));
        await elements('#todo-list li').by(have.no.cssClass('completed')).should(have.texts('c'));
    });

    it('should not share todos among different users (simulating by different browser contexts)', async () => {
        await goto('http://todomvc.com/examples/emberjs');
        await element('#new-todo').type('a').then(perform.press('Enter'));
        await elements('#todo-list li').should(have.count(1));

        const another = await director.newContext();
        await another.page.goto('http://todomvc.com/examples/emberjs')

        await another.elements('#todo-list li').should(have.count(0));
    });

    it('should not share todos among different browsers', async () => {
        await goto('http://todomvc.com/examples/emberjs');
        await element('#new-todo').type('a').then(perform.press('Enter'));
        await elements('#todo-list li').should(have.count(1));

        const another = await director.newBrowser();
        await another.page.goto('http://todomvc.com/examples/emberjs')

        await another.elements('#todo-list li').should(have.count(0));
    });

    it('should share todos among different tabs', async () => {
        await goto('http://todomvc.com/examples/emberjs');
        await element('#new-todo').type('a').then(perform.press('Enter'));
        await elements('#todo-list li').should(have.texts('a'));

        const another = await director.newPage();
        await another.page.goto('http://todomvc.com/examples/emberjs')

        await elements('#todo-list li').should(have.texts('a'));
    });
});
