# kyc后台

# 本地测试
```
yarn install
npm run dev
```

文件结构介绍

--mock 模拟请求

-- src

  -- api 服务器接口

  -- views 左侧菜单对应的页面

  -- router 编写页面路由，权限控制也在此控制，参见asyncRoutes，通过指定roles数组控制哪个角色可见
