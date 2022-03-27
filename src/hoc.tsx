import { Component } from "react";

import { Permission } from './context';

/** 没有权限默认组件 */
function NoPermissionDefault() {
  return <div>您暂时没有权限，请联系管理员开通权限！</div>;
}

/* 编写 HOC */
export function PermissionHoc(
  authorization: string,
  NoPermission = NoPermissionDefault
) {
  return function (WrapComponent: typeof Component) {
    class Home extends Component {
      render() {
        const props = this.props;
        const matchPermission = (value: string, list: string[]) =>
          list.indexOf(value); /* 匹配权限 */
          // TODO: 参考 react-redux 修改此问题
        return (
          <Permission.Consumer>
            {(permissionList: string[]) =>
              matchPermission(authorization, permissionList) >= 0 ? (
                <WrapComponent {...props} />
              ) : (
                <NoPermission />
              )
            }
          </Permission.Consumer>
        );
      }
    }

    return Home;
  };
}
