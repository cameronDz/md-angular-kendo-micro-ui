# MD Micro-Frontend #
This mono repo is used for creating Angular Kendo UI applications to be used in an example Microfrontend web application.

### Project Creation ###
Applications and projects should be generate in the appropriate directory, either /packages or /applications. Any .gitattributes or .gitignore requirements should be in the root of the repository. All application should be generated from the /applications directory with the following command```ng new @md/app-name --prefix=md --style=scss --skip-install=true --verbose=true```.

### Versioning ###
Applicaitons and Packages both need to tag releases under under the SemVer versioning standard. Tags for applications and packages should be in the following format @md/package-name@1.2.3 or @md/app-name@9.8.7. Each project should contain a CHANGELOG that describes the changes in the version bump.

### Documentation ###
Project specific documentation should be stored in that specific directory. Any documentation on the microfronend archecture should be stored in /documentation.

