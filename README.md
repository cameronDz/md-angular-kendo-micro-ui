# NSSD Snippets UI #
This mono repo is used for creating UI applications, components, and snippets, to be used in an examples for various frameworks.

### Project Creation ###
Applications and projects should be generate in the appropriate directory, either /libraries (for individual components) or /applications (for spa applications). Any .gitattributes or .gitignore requirements should be in the root of the repository. Angular applications can be generated using the following command: ```ng new @nssd/app-name --prefix=nssd --style=scss --skip-git=true --skip-install=true --verbose=true```.

### Versioning ###
Applicaitons and Libraries both need to tag releases under under the SemVer versioning standard. Tags for applications and libraries should be in the following format @nssd/lib/library-name@1.2.3 or @nssd/app/app-name@9.8.7. Each project should contain a CHANGELOG that describes the changes in the version bump.

### Naming Convention ##
All applications and libraries names start in the same namespace; ```@nssd```. The individual names should include frameworks they were designed on top of in their name; i.e. the cascading window application was design using both Angular and Kendo as the main frameworks, so the name starts with ```ng-k-``` - ng for Angular, k for Kendo. React applications should start with ```rt```.

### Angular Library Installation ###
To install the header, footer, and overview components in the applications, run the following command - ```npm install --save-dev --verbose @nssd/ng-header @nssd/ng-footer @nssd/ng-overview-text```. Import each component from their package into the applications app.module.ts file, and add the components to the ```declarations``` array. In the tsconfig.json file, the following configurations should be set:
```js
{
  "angularCompilerOptions": {
    "enableIvy": false,
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  },
  ...
}
```
