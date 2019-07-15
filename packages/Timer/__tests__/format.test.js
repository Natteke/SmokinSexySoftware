import Timer from '../src/index';

describe('Format', () => {
    it('As time', () => {
        const string = '{{DAY}}:{{HOUR}}:{{MIN}}:{{SEC}}:{{MS}}';
        const data = {
            DAY: '01',
            HOUR: '01',
            MIN: '07',
            SEC: '54',
            MS: '00',
        };
        const output = Timer.format(string, data);
        expect(output)
            .toEqual('01:01:07:54:00');
    });

    it('As html', () => {
        const string = '<a href="/">Time left {{SEC}} sec</a>';
        const data = {
            SEC: '54',
        };
        const output = Timer.format(string, data);
        expect(output)
            .toEqual('<a href="/">Time left 54 sec</a>');
    });

    it('Any data', () => {
        const string = '<a href="/">Oh my {{DATA}}!</a>';
        const data = {
            DATA: 'GOD',
        };
        const output = Timer.format(string, data);
        expect(output)
            .toEqual('<a href="/">Oh my GOD!</a>');
    });

    it('throw error if no 1 agr', () => {
        expect(() => {
            const output = Timer.format();
        }).toThrow(Error);
    });

    it('throw error if no 2 agr', () => {
        expect(() => {
            const output = Timer.format('asd');
        }).toThrow(Error);
    });
});
