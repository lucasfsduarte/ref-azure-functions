import { ExampleService } from './example.service';
export declare class ExampleController {
    private readonly exampleService;
    constructor(exampleService: ExampleService);
    getHello(): string;
}
