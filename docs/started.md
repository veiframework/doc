### 准备环境
- jdk 1.8
- Maven 3.3.9
- Mysql 5.7
- NodeJs v16.13.1


### 构建后端服务


#### 引入Maven依赖


    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
    
        <artifactId>vei-cloud-demo</artifactId>
        
        <parent>
            <groupId>io.github.veiframework</groupId>
            <artifactId>vei-cloud-starter-project-parent</artifactId>
            <version>${revision}</version>
        </parent>
    
        <dependencies>
            <dependency>
                <groupId>io.github.veiframework</groupId>
                <artifactId>z9-authorize</artifactId>
            </dependency>
        </dependencies>

    </project>
    
    
#### 引入注册中心和RPC功能
可根据实际业务需求引入微服务相关组件,目前框架支持Dubbo,Open Feign
    
    
    <dependency>
        <groupId>io.github.veiframework</groupId>
        <artifactId>vei-cloud-starter-nacos</artifactId>
    </dependency>
    
    <dependency>
        <groupId>io.github.veiframework</groupId>
        <artifactId>vei-cloud-starter-feign</artifactId>
    </dependency>

    <dependency>
        <groupId>io.github.veiframework</groupId>
        <artifactId>vei-cloud-starter-dubbo</artifactId>
    </dependency>    

#### application.yml

    server:
      port: 48080
    spring:
      profiles:
        active: default
      application:
        name: vei-cloud-demo
      datasource:
        username: ${username}
        password: ${password}
        url: ${url}
        driver-class-name: ${driver-class-name}       
 
    vei:
      web:
        context-path: /${spring.application.name}
      security:
        verify-code:
          enabled: true
        jwt:
          expiration: 60
          refresh-expiration: 7200
        swagger:
          enabled: true
        concurrency-login:
          enabled: false
          ignored:
            - 1
        websocket:
          plain:
            enabled: true
          stomp:
            enabled: true
 
      logger:
        enabled: true
      z9:
        api-permission:
          server:
            enabled: true
        upload:
          location: /opt/resources
        tenant:
          enabled: true
          mode: logic
        purview:
          enabled: true
          increment-sync:
            enabled: false
            period: 10
            time-unit: seconds
        logger:
          client:
            type: dubbo
            dubbo:
              provider-application-name: ${provider-app}
    
    
    
    
    


    
### 搭建前端页面
前端基于Vue编写的,所以请提前安装NodeJS环境
[前往github下载前端代码](https://github.com/veiframework/vei-cloud-demo-project)
代码下载完毕后,切换到vei-cloud-admin-vue2,执行`npm install`命令安装依赖,安装完毕后执行
`npm run serve`