# NSSD Micro UI #
This mono repo is used for creating Angular Kendo UI applications to be used in an example Microfrontend web application.

### Project Creation ###
Applications and projects should be generate in the appropriate directory, either /libraries or /applications. Any .gitattributes or .gitignore requirements should be in the root of the repository. All application should be generated from the /applications directory with the following command```ng new @nssd/app-name --prefix=nssd --style=scss --skip-git=true --skip-install=true --verbose=true```.

### Versioning ###
Applicaitons and Libraries both need to tag releases under under the SemVer versioning standard. Tags for applications and libraries should be in the following format @nssd/lib/library-name@1.2.3 or @nssd/app/app-name@9.8.7. Each project should contain a CHANGELOG that describes the changes in the version bump.

### Naming Convention ##
All applications and libraries names start in the same namespace; ```@nssd```. The individual names should include frameworks they were designed on top of in their name; i.e. the cascading window application was design using both Angular and Kendo as the main frameworks, so the name starts with ```ng-k-``` - ng for Angular, k for Kendo.

### Documentation ###
Project specific documentation should be stored in that specific directory. Any documentation on the microfronend archecture should be stored in /documentation.

### Next Steps/TODO List ###
[ ] Document library publication process 
[ ] Create application deployment steps/design
