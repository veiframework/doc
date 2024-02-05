# vei-cloud-starter-annotation-processor
## 引入依赖


    <dependency>
        <groupId>io.github.veiframework</groupId>
        <artifactId>z9-dynamic-crud-annotation-processor</artifactId>
        <scope>compile</scope>
    </dependency>


## 特性
- 可扩展注解解析器,在编译阶段获取注解,实现`VeiAnnotationProcessorLoader`接口如


    @Slf4j
    @Extension
    public class Z9ApiPermissionAnnotationProcessorLoader implements VeiAnnotationProcessorLoader {
    
    
        
    
        @Override
        public void setBaseProcessor(BaseProcessor baseProcessor) {
            this.baseProcessor = baseProcessor;
        }
    
    
        @Override
        public void process(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
            List<ApiInfo> apiInfoList = new ArrayList<>();
            Set<? extends Element> elementsAnnotatedWith = roundEnv.getElementsAnnotatedWith(CustomAnnotation.class);
           elementsAnnotatedWith.forEach(annotatedElement -> {
             CustomAnnotation annotation = annotatedElement.getAnnotation(CustomAnnotation.class);
             if (annotation == null) {
                return;
             }
             log.debug("CustomAnnotation found")
           });  
        }
    
         
    
    }
