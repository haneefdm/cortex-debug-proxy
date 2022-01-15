/* eslint-disable no-console */
console.log('hello from haneef');

export class Main {
    public useTcpPort: number;

    constructor() {
        this.useTcpPort = 43859;
        this.parseArgs();
    }

    parseArgs() {
        throw new Error('Method not implemented.');
    }

    start() {
        throw new Error('Method not implemented.');
    }
}

const main = new Main();
main.start();
