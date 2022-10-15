import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';

export const mockRequest = {
  query: {},
  params: {},
};
export const mock = {
  switchToHttp() {
    return this;
  },
  getRequest() {
    return mockRequest;
  },
};

export function getParamDecoratorFactory(decorator) {
  class Test {
    public test(@decorator() value) {
      return;
    }
  }

  const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, Test, 'test');
  return args[Object.keys(args)[0]].factory;
}
