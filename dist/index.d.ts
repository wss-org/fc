import { IInputs } from './lib/interface/interface';
import BaseComponent from './common/base';
export default class FcBaseComponent extends BaseComponent {
    logger: any;
    plan(inputs: IInputs): Promise<any>;
    deploy(inputs: IInputs): Promise<any>;
    remove(inputs: IInputs): Promise<any>;
    info(inputs: IInputs): Promise<any>;
    sync(inputs: IInputs): Promise<any>;
    build(inputs: IInputs): Promise<any>;
    local(inputs: IInputs): Promise<any>;
    invoke(inputs: IInputs): Promise<any>;
    logs(inputs: IInputs): Promise<any>;
    metrics(inputs: IInputs): Promise<any>;
    nas(inputs: IInputs): Promise<any>;
    stress(inputs: IInputs): Promise<any>;
    version(inputs: IInputs): Promise<any>;
    alias(inputs: IInputs): Promise<any>;
    provision(inputs: IInputs): Promise<any>;
    ondemand(inputs: IInputs): Promise<any>;
    onDemand(inputs: IInputs): Promise<any>;
    layer(inputs: IInputs): Promise<any>;
    proxied(inputs: IInputs): Promise<any>;
    fun2s(inputs: IInputs): Promise<any>;
    remote(inputs: IInputs): Promise<any>;
    eval(inputs: IInputs): Promise<any>;
    help(): Promise<void>;
    private isHelp;
    private handlerInputs;
    private report;
    private handlerComponentInputs;
    private componentMethodCaller;
}
