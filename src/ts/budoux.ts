import { loadDefaultJapaneseParser } from 'budoux';

class BudouX {
    private target: Element;
    private parser: any;

    constructor(target: Element){
        this.target = target;
        this.parser = loadDefaultJapaneseParser();

        if (this.target != null) {
            this.parser.applyElement(this.target);
            this.target.outerHTML;
        }
    }
}

const setBudouX = () => {
    const targets = document.querySelectorAll('.budou-this');

    targets.forEach((target) => {
        new BudouX(target);
    });
};

export {setBudouX};
