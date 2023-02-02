/// <reference path='fourslash.ts' />

// @Filename: node_modules/foo/index.js
//// /*index*/{}

// @Filename: a.ts
////import /*foo*/foo from /*fooModule*/"foo";
/////*fooCall*/foo();

goTo.file("a.ts");
verify.numberOfErrorsInCurrentFile(0);

goTo.marker("fooModule");
verify.quickInfoIs("");

goTo.marker("foo");
verify.quickInfoIs("import foo");

verify.baselineCommands(
    { type: "getDefinitionAtPosition", markerOrRange: ["fooModule", "foo"] },
    { type: "findAllReferences", markerOrRange: ['foo', 'fooModule', 'fooCall'] },
);
