// ISTQB CTFL v4.0 Sample Exam B — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.B = {
 "id": "B",
 "title": "ISTQB CTFL 4.0 — Sample Exam B",
 "questions": [
  {
   "n": 1,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is an example of why testing is necessary?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users"
    },
    {
     "letter": "b",
     "text": "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing"
    },
    {
     "letter": "c",
     "text": "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release"
    },
    {
     "letter": "d",
     "text": "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. It is often possible to use dynamic testing to cause a test\nobject to fail in ways that could never be achieved by the users, such as\nby using fault injection. However, if the failure can never occur with real\nend users, then identifying it is not especially valuable as testing is\nultimately aimed at improving the work product for the end users.\nSpending time testing for failures that cannot occur with real users is not\nan efficient use of a tester's time</strong></p>\n<p><strong>b) Is not correct. Static testing in the form of static analysis is used by\ndevelopers to identify defects in their code earlier than can be achieved\nthrough dynamic testing. Note, however, that static testing (and static\nanalysis) is used to detect defects, not failures, which are found by\ndynamic testing.</strong></p>"
  },
  {
   "n": 2,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.2.2",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "QA is performed as part of testing"
    },
    {
     "letter": "b",
     "text": "Testing is performed as part of QC"
    },
    {
     "letter": "c",
     "text": "Testing is another term for QC"
    },
    {
     "letter": "d",
     "text": "Testing is performed as part of QA"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>Thus:</strong></p>\n<p><strong>c) Is not correct. Static analysis directly detects defects in code, and this is\nnormally information for the developer, not the customer.</strong></p>\n<p><strong>d) Is correct. Reviews are a form of static testing that can be applied from\nthe very start of the software development lifecycle and are used to find\ndefects that can be removed before subsequent development activities\nwaste effort on faulty requirements. If the defects are not detected and\nremoved early on, then when the defect is found in derived work\nproducts, such as the design and code, the requirements will need to be\nchanged.</strong></p>"
  },
  {
   "n": 3,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.3.1",
   "selectCount": 1,
   "stem": "<p>One of the `principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Creating test cases that cover every possible specified output"
    },
    {
     "letter": "b",
     "text": "Documenting all possible test input variations and prioritizing these based on importance"
    },
    {
     "letter": "c",
     "text": "Starting testing as early as possible with reviews and other static testing approaches"
    },
    {
     "letter": "d",
     "text": "Using equivalence partitioning and boundary value analysis to generate test cases"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. QA concentrates on process improvement and\nimplementation, using a preventive approach to avoid errors and\ndefects, while testing is a form of QC that is used to detect defects</strong></p>\n<p><strong>b) Is correct. QC aims to achieve appropriate levels of quality by focusing\non identifying and correcting product defects. Testing is a significant\npart of QC and helps to uncover these defects</strong></p>\n<p><strong>c) Is not correct. Although testing is a significant part of QC and helps to\nuncover defects, other (non-testing) techniques utilized in QC include\nformal methods like model checking and proof of correctness, as well as\nsimulation and prototyping</strong></p>\n<p><strong>d) Is not correct. QA concentrates on process improvement and\nimplementation, using a preventive approach to avoid errors and\ndefects, while testing is a form of QC that is used to detect defects</strong></p>"
  },
  {
   "n": 4,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.1",
   "selectCount": 1,
   "stem": "<p>Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test design"
    },
    {
     "letter": "b",
     "text": "Test execution"
    },
    {
     "letter": "c",
     "text": "Test analysis"
    },
    {
     "letter": "d",
     "text": "Test implementation"
    }
   ],
   "answer": "a",
   "explanation": "<p>The `exhaustive testing is impossible' principle is concerned with the fact\n\nthat it is not feasible to test every possible variation of inputs in all different\n\ncircumstances, except in trivial cases. Instead, testing utilizes test\n\ntechniques, test case prioritization, and risk-based testing to sample from\n\nthe set of possibilities and focus test efforts.</p>\n<p><strong>a) Is not correct. The principle states that it is not feasible to test everything\nexcept in trivial cases. Testing everything would require testing every\npossible variation of inputs in all different circumstances, which is\ngenerally infeasible as there will be a practically infinite number of\npossibilities. Testing every possible expected result will not address this\nproblem as the relationship between inputs and expected results can be\ndifferent for each test object. Sometimes there may be a practically\ninfinite number of possible expected results (e.g., when there are\nseveral variables representing real numbers), whereas at other times\nthere may be just two expected results, such as with a single variable\nthat can be either true or false</strong></p>\n<p><strong>b) Is not correct. The principle states that it is not feasible to test every\npossible variation of inputs in all different circumstances. This is\nbecause for non-trivial systems there is a practically infinite number.\nTherefore, in practice, documenting all possible input variations would\nbe impractical as it would take an infinite length of time</strong></p>\n<p><strong>c) Is not correct. Starting testing as early as possible with reviews and\nother static testing approaches will not address the problem of there\nbeing too many possible test cases. The `early testing saves time and\nmoney' principle is concerned with fixing defects early on to prevent the\noccurrence of subsequent defects in derived work products, thereby\nreducing costs and the likelihood of failures</strong></p>\n<p><strong>d) Is correct. The use of equivalence partitioning and boundary value\nanalysis to generate test cases is one way to address the principle as\nthese test techniques provide a systematic way to derive a finite subset\nof all possible test cases</strong></p>"
  },
  {
   "n": 5,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to impact how testing is performed for a given test object?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The average level of experience of the organization's marketing team"
    },
    {
     "letter": "b",
     "text": "The knowledge of users that a new system is being developed for them"
    },
    {
     "letter": "c",
     "text": "The number of years' experience of the members of the test team"
    },
    {
     "letter": "d",
     "text": "The end user's organizational structure for a commercial music streaming application"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is correct. Test design involves using test conditions to create test\ncases and other necessary testware, such as test data requirements\nand test charters for exploratory testing. Test environment requirements\nare also specified, including the necessary infrastructure and tools</strong></p>\n<p><strong>b) Is not correct. Test execution involves executing test cases (as part of\ntest procedures), however it does not directly cover the other testware\nmentioned in the question, such as test data requirements, test\nenvironment requirements and test conditions</strong></p>\n<p><strong>c) Is not correct. Test analysis is used to identify the features that require\ntesting. The test basis is analyzed and defined as test conditions, which\nare then prioritized along with related risks. While this activity involves\nworking with test conditions, it does not cover the other testware\nmentioned in the question, such as test data requirements, test\nenvironment requirements and test cases</strong></p>\n<p><strong>d) Is not correct. Test implementation includes the generation of test\nprocedures, such as manual and automated test scripts, which are\ncreated from test cases and may be assembled into test suites. Test\nprocedures are prioritized and arranged in a test execution schedule.\nTest data is created, and the test environment built, and its set up\nverified. While this activity involves explicitly working with test cases,\nand may use test data requirements and test environment requirements\nto create test data and the test environment, it does not cover test\nconditions</strong></p>"
  },
  {
   "n": 6,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.4",
   "selectCount": 1,
   "stem": "<p>Which of the following statements is a CORRECT example of the value of traceability?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk"
    },
    {
     "letter": "b",
     "text": "Traceability between user requirements and test results provides a means of measuring project progress against business goals"
    },
    {
     "letter": "c",
     "text": "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers"
    },
    {
     "letter": "d",
     "text": "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. The organization's marketing team is unlikely to perform\nmuch testing (although in some organizations they may be involved with\nacceptance testing), so their average level of experience (most of which\nwould be in marketing) is not likely to impact how testing is performed\nfor a given test object</strong></p>\n<p><strong>b) Is not correct. The level of knowledge of users that a new system is\nbeing built for them is unlikely to affect how testing is performed. Any\nuser involvement that could affect how testing is performed is more\nlikely to be as a result of decisions made by the testers, customer and\nproject manager</strong></p>\n<p><strong>c) Is correct. The number of years' experience of the members of the\nperformance efficiency testing team will help to determine the\ncapabilities and knowledge (e.g., of different tools and defect types) that\nthe team members will apply when they are testing</strong></p>\n<p><strong>d) Is not correct. The organizational structure of the different end users\n(who may be varied) will change between users. So, it may not even be\nknown when the application is being tested, and the end user's\norganizational structure can thus have little effect on how the testing is\nperformed</strong></p>"
  },
  {
   "n": 7,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.5.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to be an example of a tester using a generic skill when testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The tester's deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming"
    },
    {
     "letter": "b",
     "text": "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system"
    },
    {
     "letter": "c",
     "text": "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts"
    },
    {
     "letter": "d",
     "text": "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Traceability between the mitigated risks and test cases\nthat passed provides little information, because to be mitigated (by\ntesting) the risks would need to have a corresponding test case that\npassed. To be able to assess residual risk, traceability between all risks\nand test results needs to be available, so that the risks that do not have\na corresponding passing test can be identified as the residual risks</strong></p>\n<p><strong>b) Is correct. Traceability between user requirements and test results\nprovides an indication of which user requirements have been tested and\nso provides a means of measuring project progress (in the context of\ntesting) against business goals</strong></p>\n<p><strong>c) Is not correct. It is not clear that test cases that failed provide an\nindication of tester's skills any more than test cases that passed. It\nwould partly depend on the test objective (e.g., building confidence or\ncausing failures). Also, such measurement of testers based on test\ncases that passed and failed can be counter-productive as it could\ncause the testers to optimize their testing based on that metric rather\nthan the test objective</strong></p>\n<p><strong>d) Is not correct. Traceability between the identified risks and written test\nconditions provides a means of determining which further test conditions\nneed to be written. Determining which risks are worth testing is part of\nrisk management, and risk mitigation in particular</strong></p>"
  },
  {
   "n": 8,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.5.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is an advantage of the whole-team approach?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It allows team members to take on any role at any time"
    },
    {
     "letter": "b",
     "text": "It only needs a single team to support the complete development project"
    },
    {
     "letter": "c",
     "text": "It embeds business representatives alongside developers in the same team"
    },
    {
     "letter": "d",
     "text": "It generates a team synergy that benefits the entire project"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Strong communication skills, active listening, and\nteamwork abilities enable a tester to interact effectively with all\nstakeholders, however a deep knowledge of a variety of computer\ngames that allowed them to get on well with one developer is not an\nexample of a generic skill useful to testers</strong></p>\n<p><strong>b) Is correct. Domain knowledge that can be used to understand and\ncommunicate with end-users and business representatives is one of the\ngeneric skills required by testers. A tester with experience as a pilot\nwould make them better able to appreciate the acceptance criteria for\nthe helicopter control system</strong></p>\n<p><strong>c) Is not correct. Although programming skills could be considered as\ntechnical knowledge which can increase efficiency when utilizing some\ntest tools, it is unlikely that these skills would improve their\ncommunication with business analysts</strong></p>\n<p><strong>d) Is not correct. Although thoroughness, attention to detail, curiosity, and\na methodical approach to identifying hard-to-find defects are all useful\ngeneric skills for testers, it is doubtful they would be generating test\ncases prior to starting exploratory testing. This is because one of the\nmain tenets of exploratory testing is that the test cases are generated\nduring the testing, not scripted in advance</strong></p>"
  },
  {
   "n": 9,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about the chosen software development lifecycle is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "If agile software development is used, automation of system tests replaces the need for regression testing"
    },
    {
     "letter": "b",
     "text": "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle"
    },
    {
     "letter": "c",
     "text": "If an iterative development model is used, then component testing is typically performed manually by developers"
    },
    {
     "letter": "d",
     "text": "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. The whole-team approach allows any team member with\nthe requisite skills and knowledge to undertake any task, however that\ndoes not mean that team members can take on any role at any time.\nTypically, they only take on roles in which they are competent, and there\nis no suggestion that every team member can do every role</strong></p>\n<p><strong>b) Is not correct. The whole-team approach applies to how a single team\n(typically in Agile software development) works; it does not cover how\nmultiple teams are supposed to work on larger projects, and it does not\nsuggest that only one `whole' team is needed for a complete project</strong></p>\n<p><strong>c) Is not correct. The whole-team approach does not expect every team\nmember to be involved in every important decision. For instance, there\nis no need for the business representative (i.e., the Product Owner) to\nbe involved in every technical decision that does not affect the business\noutcome and implementing such an approach would unnecessarily slow\ndown the team's progress</strong></p>\n<p><strong>d) Is correct. By leveraging the diverse skill sets of each team member\nmost effectively, the whole-team approach fosters superior team\ndynamics, promotes robust communication and collaboration, and\ngenerates a team synergy that benefits the entire project</strong></p>"
  },
  {
   "n": 10,
   "points": 1,
   "k": "K1",
   "lo": "FL-2.1.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is a good testing practice that applies to all software development lifecycles?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Testers should review work products as part of the next development phase"
    },
    {
     "letter": "b",
     "text": "Testers should review work products as soon as drafts are available"
    },
    {
     "letter": "c",
     "text": "Testers should review work products before test analysis and test design begin"
    },
    {
     "letter": "d",
     "text": "Testers should review work products immediately after they are published"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. In agile software development, deliverables are produced\nin each iteration, and the frequent delivery of increments necessitates\nextensive regression testing. Although some (or all) of this regression\ntesting may be automated, the regression testing (automated or not)\ncannot be replaced by automation of system tests</strong></p>\n<p><strong>b) Is correct. If a sequential development model is used, then early in the\nsoftware development lifecycle no code is available for execution, and\nso during this time static testing (e.g., reviews) is performed. Later in the\nlifecycle, when code is available for execution, dynamic testing is\npossible. Note, however, that preparation for dynamic testing will often\noccur early in any software development lifecycle</strong></p>\n<p><strong>c) Is not correct. If an iterative development model, like agile software\ndevelopment, is used, then component tests may well be used for\nregression testing for each iteration. In which case, there is a strong\nargument for automating these component tests, which will have to be\nrun frequently, and there is unlikely to be a strong argument for\ndevelopers performing these component tests manually</strong></p>\n<p><strong>d) Is not correct. In most incremental development models, deliverables\nare produced in each increment, requiring both static testing and\ndynamic testing at all test levels for each increment delivered</strong></p>"
  },
  {
   "n": 11,
   "points": 1,
   "k": "K1",
   "lo": "FL-2.1.3",
   "selectCount": 1,
   "stem": "<p>Which of the following is an example of a test-first approach to development?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test-Driven Development"
    },
    {
     "letter": "b",
     "text": "Coverage-Driven Development"
    },
    {
     "letter": "c",
     "text": "Quality-Driven Development"
    },
    {
     "letter": "d",
     "text": "Feature-Driven Development"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is not correct. Testers should review work products as soon as drafts\nare available to enable early testing as part of a shift-left approach. If\nthey waited until the next development phase, then unnecessary\ndevelopment (and test) work could be started on unreviewed, flawed\nwork products</strong></p>\n<p><strong>b) Is correct. Testers should review work products as soon as drafts are\navailable to enable early testing as part of a shift-left approach</strong></p>\n<p><strong>c) Is not correct. Testers typically review work products that form the test\nbasis as part of test analysis, not before test analysis and test design</strong></p>\n<p><strong>d) Is not correct. Testers should review work products as soon as drafts\nare available to enable early testing as part of the shift-left approach.\nWaiting until they are published means that any defects that could be\nfound by tester's review will be in the published document</strong></p>"
  },
  {
   "n": 12,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.4",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about DevOps is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing"
    },
    {
     "letter": "b",
     "text": "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression"
    },
    {
     "letter": "c",
     "text": "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach"
    },
    {
     "letter": "d",
     "text": "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is correct. Test-Driven Development (TDD) is a well-known example of\na test-first approach to development</strong></p>\n<p><strong>b) Is not correct. Coverage-Driven Development is not a correct example\nof a test-first approach to development</strong></p>\n<p><strong>c) Is not correct. Quality-Driven Development is not a correct example of a\ntest-first approach to development</strong></p>\n<p><strong>d) Is not correct. Feature-Driven Development is not an example of a test-\nfirst approach to development, but is, instead, an agile software\ndevelopment methodology based around delivering features (as\nopposed to user stories in Scrum)</strong></p>"
  },
  {
   "n": 13,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to be performed as part of system testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Security testing of a credit management system by an independent test team"
    },
    {
     "letter": "b",
     "text": "Testing the interface of a currency exchange system with an external banking system"
    },
    {
     "letter": "c",
     "text": "Beta testing of a remote learning system by courseware developers"
    },
    {
     "letter": "d",
     "text": "Testing interactions between the user interface and database of a human resources system"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is not correct. DevOps enhances testing in several ways, such as by\nproviding fast feedback on code quality, automated regression testing\nthat minimizes regression risk, and promoting a shift-left approach with\nhigh-quality code submission and component tests. This is largely\nprovided through continuous integration, where the developers submit\ncomponent (unit) tests with their new code, which must pass for the\ncode to be admitted to the build. Therefore, developers do need to\ncomplete component testing</strong></p>\n<p><strong>b) Is correct. DevOps enhances testing in several ways, such as by\nproviding fast feedback on code quality, automated regression testing\nthat minimizes regression risk, and promoting a shift-left approach with\nhigh-quality code submission and component tests</strong></p>\n<p><strong>c) Is not correct. DevOps enhances testing in several ways, such as by\nproviding fast feedback on code quality, automated regression testing\nthat minimizes regression risk, and promoting a shift-left approach with\nhigh-quality code submission and component tests. Testers do not\nattempt to treat developers and operations equally by spending more\ntime on release testing, although a shift-right approach to testing\n(testing in production) may well be used</strong></p>\n<p><strong>d) Is not correct. Automated processes like continuous\nintegration/continuous delivery (CI/CD) in DevOps facilitate stable test\nenvironments and reduce the need for manual testing, however, there is\na risk of overlooking the importance of manual testing, especially from a\nuser's perspective</strong></p>"
  },
  {
   "n": 14,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.3",
   "selectCount": 1,
   "stem": "<p>Which of the following statements is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses"
    },
    {
     "letter": "b",
     "text": "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced"
    },
    {
     "letter": "c",
     "text": "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object"
    },
    {
     "letter": "d",
     "text": "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is correct. System testing examines the behavior and capabilities of the\ncomplete system and covers non-functional testing of quality\ncharacteristics, which includes security testing. This type of testing is\noften performed by an independent test team based on system\nspecifications</strong></p>\n<p><strong>b) Is not correct. System integration testing examines the interfaces with\nother systems and external services</strong></p>\n<p><strong>c) Is not correct. Beta testing is a type of acceptance testing performed at\nan external site by roles outside the development organization</strong></p>\n<p><strong>d) Is not correct. Component integration testing involves testing the\n(interfaces and) interactions between components of a system, such as\nthe user interface and database</strong></p>"
  },
  {
   "n": 15,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.1.3",
   "selectCount": 1,
   "stem": "<p>Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Lack of usability provided through the user interface"
    },
    {
     "letter": "b",
     "text": "Code with no path that reaches it"
    },
    {
     "letter": "c",
     "text": "Poor response times for most of the expected users"
    },
    {
     "letter": "d",
     "text": "Required features that are not implemented in the code"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Regression tests increase in number as the project\nprogresses, as new regression tests are typically required as changes\nare made to the system. Similarly, the number of confirmation tests also\ntypically increases as the project progresses as new confirmation tests\nare needed for each fix made to a system</strong></p>\n<p><strong>b) Is not correct. It is the other way round. Confirmation tests are created\nand run when the test object is fixed, and regression tests are (ideally)\nrun whenever the test object is enhanced (changed)</strong></p>\n<p><strong>c) Is not correct. Confirmation testing verifies that a defect has been fixed\ncorrectly and so is concerned with testing changes to the test object.\nHowever, regression testing ensures that changes (including changes to\nthe operational environment) do not have negative effects on\nunchanged software and so does not check that the operational\nenvironment remains unchanged</strong></p>\n<p><strong>d) Is correct. Regression testing ensures that changes do not have\nnegative effects on unchanged software. Confirmation testing verifies\nthat a defect has been fixed – and so is concerned with changed code</strong></p>"
  },
  {
   "n": 16,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is a benefit of early and frequent stakeholder feedback?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Managers are aware of which developers are less productive"
    },
    {
     "letter": "b",
     "text": "It allows project managers to prioritize their stakeholder interactions"
    },
    {
     "letter": "c",
     "text": "It facilitates early communication of potential quality issues"
    },
    {
     "letter": "d",
     "text": "End users better understand why the delivery of the work product is delayed"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. A lack of usability provided through the user interface can\nbe detected through a review using a suitable checklist, but the lack of\nusability can also be identified by getting several typical users to\ndynamically test the user interface and provide feedback on its usability</strong></p>\n<p><strong>b) Is correct. A code review can detect code that cannot be reached by\nany path, however dynamic tests can only exercise reachable code and\ncannot determine that code cannot be reached without running every\npossible combination of inputs and input states, which is impractical for\nreal code</strong></p>\n<p><strong>c) Is not correct. Poor response times for most of the expected users are\ndifficult to determine without executing the code (i.e., by static testing),\nso in this situation dynamic testing could find a defect, but static testing\nis unlikely to find it</strong></p>\n<p><strong>d) Is not correct. A review of the code by someone who is aware of the\nrequired features could detect that the required features had not been\nimplemented in the code, and dynamic testing could also be used to\ndetermine that these required features had not been implemented</strong></p>"
  },
  {
   "n": 17,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.2.2",
   "selectCount": 1,
   "stem": "<p>Given the following task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected 2. Everyone has access to the work product 3. Anomalies are identified in the work product 4. Anomalies are discussed</p>\n<p>And the following review activities A. Individual review B. Review initiation C. Planning D. Communication and analysis</p>\n<p>Which of the following BEST matches the task descriptions and activities?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1B, 2C, 3D, 4A"
    },
    {
     "letter": "b",
     "text": "1B, 2D, 3C, 4A"
    },
    {
     "letter": "c",
     "text": "1C, 2A, 3B, 4D"
    },
    {
     "letter": "d",
     "text": "1C, 2B, 3A, 4D"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The feedback is from stakeholders (e.g., business\nrepresentatives and end users), not from developers, so this feedback is\nnot likely to inform managers which developers are more or less\nproductive</strong></p>\n<p><strong>b) Is not correct. Early and frequent feedback from stakeholders is not\nused by project managers to prioritize how they interact with the\ndifferent stakeholders</strong></p>\n<p><strong>c) Is correct. Obtaining feedback from stakeholders early and often in the\nsoftware development process can be highly beneficial as it facilitates\nearly communication of potential quality issues, can prevent\nmisunderstandings about requirements, and ensures that any changes\nin stakeholder requirements are understood and implemented sooner</strong></p>\n<p><strong>d) Is not correct. Early and frequent feedback can prevent the\ndevelopment of a product that does not meet stakeholder needs, and\nresults in costly rework and missed deadlines, so, ideally there should\nbe no delay. Also, the feedback is from stakeholders (not to them),\nwhich includes the end users, so the end users providing feedback will\nnot aid the end users' understanding</strong></p>"
  },
  {
   "n": 18,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.3",
   "selectCount": 1,
   "stem": "<p>Given the following roles in reviews: 1. Scribe 2. Review leader 3. Facilitator 4. Manager</p>\n<p>And the following responsibilities in reviews: A. Ensures the effective running of review meetings and the setting up a safe review environment B. Records review information, such as decisions and new anomalies found during the review meeting C. Decides what is to be reviewed and provides resources, such as staff and time for the review D. Takes overall responsibility for the review such as organizing when and where the review will take place</p>\n<p>Which of the following BEST matches the roles and responsibilities?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1A, 2B, 3D, 4C"
    },
    {
     "letter": "b",
     "text": "1A, 2C, 3B, 4D"
    },
    {
     "letter": "c",
     "text": "1B, 2D, 3A, 4C"
    },
    {
     "letter": "d",
     "text": "1B, 2D, 3C, 4A"
    }
   ],
   "answer": "c",
   "explanation": "<p>Considering each of the listed task descriptions:\n1. The quality characteristics to be evaluated and the exit criteria are\nselected - (Planning (C): Defining the review scope, purpose,\nwork product to be reviewed, quality characteristics to be\nevaluated, areas of focus, exit criteria, supporting information\nsuch as standards, effort, and timeframes.)\n2. Everyone has access to the work product - (Review initiation (B):\nEnsuring all participants have access to the work product and\nnecessary resources, and clarifying their roles and\nresponsibilities.)\n3. Anomalies are identified in the work product - (Individual review\n(A): Evaluating the work product's quality, identifying and logging\nanomalies, recommendations, and questions using review\ntechniques like checklist-based reviewing and scenario-based\nreviewing.)\n4. Anomalies are analyzed and discussed - (Communication and\nanalysis (D): Analyzing and discussing each anomaly,\ndetermining its status, ownership, and required actions, and\nmaking review decisions, normally in a meeting. This could\ninclude determining the need for a follow-up review.)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct. The correct match is: 1C, 2B, 3A, 4D</strong></p>"
  },
  {
   "n": 19,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following statements BEST describes the difference between decision table testing and branch testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object."
    },
    {
     "letter": "b",
     "text": "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code."
    },
    {
     "letter": "c",
     "text": "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic."
    },
    {
     "letter": "d",
     "text": "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
    }
   ],
   "answer": "d",
   "explanation": "<p>Considering each of the listed roles:\n1. Scribe (or Recorder) - responsible for gathering feedback from\nreviewers and documenting review information, such as decisions\nmade, and any new anomalies identified during the review\nmeeting. (Records review information, such as decisions and new\nanomalies found during the review meeting - B)\n2. Review Leader - responsible for overseeing the review process,\nsuch as selecting the review team members, scheduling review\nmeetings, and ensuring that the review is completed successfully.\n(Takes overall responsibility for the review such as organizing\nwhen and where the review will take place - D)\n3. Facilitator (or Moderator) - responsible for ensuring that the\nreview meetings run effectively, including managing time,\nmediating discussions, and creating a safe environment where\neveryone can voice their opinions freely. (Ensures the effective\nrunning of review meetings and the setting up of a safe review\nenvironment - A)\n4. Manager - responsible for deciding what needs to be reviewed\nand allocating resources, such as staff and time, for the review.\n(Decides what is to be reviewed and provides resources, such as\nstaff and time for the review - C)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct. The correct match is: 1B, 2D, 3A, 4C</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 20,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.1",
   "selectCount": 1,
   "stem": "<p>Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to.</p>\n<p>For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total).</p>\n<p>Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "19, 20, 30"
    },
    {
     "letter": "b",
     "text": "11, 12, 20"
    },
    {
     "letter": "c",
     "text": "1, 10, 50"
    },
    {
     "letter": "d",
     "text": "10, 29, 30, 31"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is not correct. Decision table testing is a black-box test technique, not a\nwhite-box test technique – the test cases are not based on the decisions\nin the source code. In branch testing, the test cases are derived from\nknowledge of the control flow of the test object</strong></p>\n<p><strong>b) Is not correct. Anticipation of potential defects is used in error guessing\n(an experience-based test technique), not in branch testing (a white-box\ntest technique). In decision table testing, the test cases are derived from\nthe specification that describes the business logic</strong></p>\n<p><strong>c) Is not correct. If a test case is based on the knowledge of the control\nflow of the test object, it is a white-box test technique. Decision table\ntesting is typically based on an analysis of business logic, so it is a\nblack-box test technique. In branch testing, test cases are not derived\nfrom the specification – this would make it a black-box test technique.\nBranch testing is a white-box test technique, where test cases are\nderived based on the source code structure</strong></p>\n<p><strong>d) Is correct. Decision table testing is a black-box test technique, so it is\nbased on an analysis of the specified behavior of the test object without\nreference to its internal structure. Therefore, the test cases are\nindependent of how the software is implemented. Branch testing is a\nwhite-box test technique, so test cases are based on an analysis of the\ntest object's internal structure and processing. As the test cases are\ndependent on how the software is designed and coded, they can only\nbe created after the design or implementation of the test object</strong></p>"
  },
  {
   "n": 21,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.2",
   "selectCount": 1,
   "stem": "<p>You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect.</p>\n<p>At first, the form is empty (password length = 0). You apply boundary value analysis to the \"password length\" variable.</p>\n<p>Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage.</p>\n<p>Which additional password lengths should be tested to achieve this?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "4, 5, 13, 14"
    },
    {
     "letter": "b",
     "text": "7, 11"
    },
    {
     "letter": "c",
     "text": "1, 5, 13"
    },
    {
     "letter": "d",
     "text": "1, 4, 7, 11, 14"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is correct. 19 covers the \"no discount\" partition, 20 covers the \"50%\ndiscount\" partition, and 30 covers the \"10% discount\" partition. These\nthree values cover all three of the valid equivalence partitions</strong></p>\n<p><strong>b) Is not correct. 11 and 12 cover the \"no discount\" partition, while 20\ncovers the \"50% discount\" partition, so covering two of the three valid\nequivalence partitions</strong></p>\n<p><strong>c) Is not correct. 1 covers the \"no discount\" partition, while 10 and 50 cover\nthe \"10% discount\" partition. The \"50% discount\" partition is not\ncovered, so overall two of the three valid equivalence partitions are\ncovered</strong></p>\n<p><strong>d) Is not correct. 29 and 31 cover the \"no discount\" partition, while 10 and\n30 cover the \"10% discount\" partition. The \"50% discount\" partition is\nnot covered, so overall two of the three valid equivalence partitions are\ncovered</strong></p>"
  },
  {
   "n": 22,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.3",
   "selectCount": 1,
   "stem": "<p>The following decision table contains the rules for determining the risk of atherosclerosis.</p>\n<p>Rule 1 Rule 2 Rule 3 Rule 4 Rule 5 124 124 Conditions &gt; 140 125–125–201 Cholesterol (mg/dl) low 200 200 – 140 Blood pressure (mm 140 &gt; 140 Hg) very low medium high very high Action</p>\n<p>Risk level</p>\n<p>You designed the test cases with the following input data:</p>\n<p>TC1: Cholesterol = 125 mg/dl Blood pressure = 141 mm Hg</p>\n<p>TC2: Cholesterol = 200 mg/dl Blood pressure = 201 mm Hg</p>\n<p>TC3: Cholesterol = 124 mg/dl Blood pressure = 201 mm Hg</p>\n<p>TC4: Cholesterol = 109 mg/dl Blood pressure = 200 mm Hg</p>\n<p>TC5: Cholesterol = 201 mg/dl Blood pressure = 140 mm Hg</p>\n<p>What is the decision table coverage achieved by these test cases?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "40%"
    },
    {
     "letter": "b",
     "text": "60%"
    },
    {
     "letter": "c",
     "text": "80%"
    },
    {
     "letter": "d",
     "text": "100%"
    }
   ],
   "answer": "b",
   "explanation": "<p>The domain for the password length has three equivalence partitions:\n– passwords too short {0, 1, ..., 4, 5}\n– passwords OK {6, 7, ..., 11, 12}</p>\n<ul><li>passwords too long {13, 14, ...}\n\nTo achieve full coverage for 3-value BVA we need to test the following\nvalues:\n\n0, 1, 4, 5, 6, 7, 11, 12, 13, 14.\n\nSince 2-value BVA is already covered, this means that we have already\ntested the passwords of length:\n\n0, 5, 6, 12 and 13.\n\nThis means that the additional lengths that need to be covered to move\nfrom 2-value to 3-value are:\n\n1, 4, 7, 11 and 14.</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct</strong></p>"
  },
  {
   "n": 23,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.4",
   "selectCount": 1,
   "stem": "<p>A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.</p>\n<p>Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?</p>",
   "exhibit": "<div class=\"exhibit\"><svg viewBox=\"0 0 640 270\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arrB23\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#333\"/></marker></defs><rect x=\"30\" y=\"105\" width=\"130\" height=\"60\" rx=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.6\"/><text x=\"95\" y=\"140\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#333\">START</text><rect x=\"255\" y=\"105\" width=\"130\" height=\"60\" rx=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.6\"/><text x=\"320\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#333\">NOT FULL</text><text x=\"320\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" fill=\"#555\">N = 0, 1 or 2</text><rect x=\"480\" y=\"105\" width=\"130\" height=\"60\" rx=\"30\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.6\"/><text x=\"545\" y=\"132\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#333\">FULL</text><text x=\"545\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" fill=\"#555\">N = 3</text><path d=\"M160,138 L251,138\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"207\" y=\"124\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Add / N := 1  (E1)</text><path d=\"M292,107 C292,55 352,55 348,103\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"320\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Add [N &lt; 2] / N := N + 1  (E2)</text><path d=\"M292,163 C292,215 352,215 348,167\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"320\" y=\"240\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Remove [N &gt; 0] / N := N &#8722; 1  (E3)</text><path d=\"M378,120 C400,70 470,74 482,106\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"432\" y=\"62\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Add [N = 2] / N := N + 1  (E4)</text><path d=\"M482,166 C462,200 390,198 378,158\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"432\" y=\"196\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Remove / N := N &#8722; 1  (E5)</text></svg></div>",
   "options": [
    {
     "letter": "a",
     "text": "Add, Remove, Add, Add, Add"
    },
    {
     "letter": "b",
     "text": "Add, Add, Add, Add, Remove, Remove"
    },
    {
     "letter": "c",
     "text": "Add, Add, Add, Remove, Remove"
    },
    {
     "letter": "d",
     "text": "Add, Add, Add, Remove, Add"
    }
   ],
   "answer": "c",
   "explanation": "<p>There are five columns in the decision table. Each test case covers one of\nTC1 and TC2 both cover Rule 4\nTC3 and TC4 both cover Rule 2\nTC5 covers Rule 5\nSo, these five test cases cover three out of five columns, achieving a\ncoverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT\noption.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 24,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.1",
   "selectCount": 1,
   "stem": "<p>You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.</p>\n<p>Which of the following sentences must be necessarily true?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The test suite composed of tests T1 and T2 achieves 105% statement coverage"
    },
    {
     "letter": "b",
     "text": "There exists at least one statement that must have been executed by both T1 and T2"
    },
    {
     "letter": "c",
     "text": "At least 5% of the statements in the code that was tested are non-executable"
    },
    {
     "letter": "d",
     "text": "The test suite composed of tests T1 and T2 achieves full branch coverage"
    }
   ],
   "answer": "b",
   "explanation": "<p>Let us refer to the transitions with E1, ..., E5 as in the picture. The variable\nN denotes the number of elements currently stored. Each \"Add\" event\nincreases it by 1, and each \"Remove\" event decreases it by 1. Notice, that\nwhen the \"Add\" event occurs while being in the NOT FULL state, the state\nchanges to FULL only if N=2. If N&lt;2, the system stays in the NOT FULL\n\nstate. If N=0, no \"Remove\" action is possible. Similarly, if N=3, no \"Add\"\naction is possible.\n\nTest a) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5\n\nvalid transitions, achieving 80% valid transitions coverage).\n\nTest b) is infeasible, because after the first three \"Add\" actions the\nsystem is in the FULL state and there is no valid transition going\n\nfrom FULL triggered by the \"Add\" event. After the first three\ntransitions only 60% of valid transitions coverage is achieved.\n\nTest c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5\n\nvalid transitions, achieving 100% valid transitions coverage).\n\nTest d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5\n\nvalid transitions, achieving 80% valid transitions coverage).</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 25,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.2",
   "selectCount": 1,
   "stem": "<p>Let the branch coverage metric be defined as BCov = (X / Y) * 100%.</p>\n<p>What do X and Y represent in this formula?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code"
    },
    {
     "letter": "b",
     "text": "X = number of conditional branches exercised by the test cases Y = total number of branches in the code"
    },
    {
     "letter": "c",
     "text": "X = number of branches exercised by the test cases Y = total number of branches in the code"
    },
    {
     "letter": "d",
     "text": "X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
    }
   ],
   "answer": "c",
   "explanation": "<p>Version 1.7</p>\n<p><strong>a) Is not correct. Coverage is always defined as the percentage of the\ncovered elements. Therefore, it cannot exceed 100%</strong></p>\n<p><strong>b) Is correct. If the statements executed by T1 and T2 were disjoint, the\ncoverage of the test suite {T1, T2} would be 105%, which is impossible\n(see answer a). Therefore, at least 5% of executable statements must\nhave been executed by both T1 and T2</strong></p>\n<p><strong>c) Is not correct. Statement coverage does not tell us anything about the\nnumber of non-executable statements in the code</strong></p>\n<p><strong>d) Is not correct. Even if a test suite achieves full statement coverage, this\ndoes not imply achieving full branch coverage</strong></p>"
  },
  {
   "n": 26,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.2",
   "selectCount": 2,
   "stem": "<p>Which TWO of the following statements provide the BEST rationale for using exploratory testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Testers have not been allocated enough time for test design and test execution"
    },
    {
     "letter": "b",
     "text": "The existing test strategy requires that testers use formal, black-box test techniques"
    },
    {
     "letter": "c",
     "text": "The specification is written in a formal language that can be processed by a tool"
    },
    {
     "letter": "d",
     "text": "Testers are the members of an agile team and have good programming skills"
    },
    {
     "letter": "e",
     "text": "Testers are experienced in the business domain and have good analytical skills"
    }
   ],
   "answer": [
    "a",
    "e"
   ],
   "explanation": "<p>Branch testing is a white-box test technique in which the coverage items are\nbranches. A branch is a transfer of control between two nodes in the control\nflow graph, which shows the possible sequences in which source code\nstatements are executed in the test object. Each transfer of control can be\neither unconditional (i.e., straight-line code) or conditional (i.e., a decision\noutcome). Coverage is measured as the number of branches exercised by\nthe test cases divided by the total number of branches, and is expressed as\na percentage.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct. A decision outcome is a conditional branch. For branch\n\ntesting, X counts not only conditional, but also unconditional branches</strong></p>\n<p><strong>b) Is not correct. Branch coverage counts not only conditional, but also\n\nunconditional branches</strong></p>\n<p><strong>c) Is correct. Branch coverage is measured as the number of branches\n\nexercised by the test cases divided by the total number of branches,\nand is expressed as a percentage</strong></p>\n<p><strong>d) Is not correct. Both X and Y count only conditional branches and do not\ntake into account the unconditional branches</strong></p>"
  },
  {
   "n": 27,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.3",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST fits as an element of the checklist used in checklist-based testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "\"The developer made an error when implementing the code\""
    },
    {
     "letter": "b",
     "text": "\"The achieved statement coverage exceeds 85%\""
    },
    {
     "letter": "c",
     "text": "\"The program works correctly regarding functional and non-functional requirements\""
    },
    {
     "letter": "d",
     "text": "\"The error messages are written in language that the user can understand\""
    }
   ],
   "answer": "d",
   "explanation": "<p>Exploratory testing is useful when there are few or inadequate\nspecifications or there is significant time pressure on the testing.\nExploratory testing is also useful to complement other more formal test\ntechniques. Exploratory testing will be more effective if the tester is\nexperienced, has domain knowledge and has a high degree of essential\nskills, like analytical skills, curiosity and creativeness.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct. Exploratory testing is useful when there are few or\n\ninadequate specifications or there is significant time pressure on the\ntesting</strong></p>\n<p><strong>b) Is not correct. Exploratory testing is not a black-box test technique</strong></p>\n<p><strong>c) Is not correct. Exploratory testing is useful when the specifications are\npoorly written</strong></p>\n<p><strong>d) Is not correct. Programming skills have nothing to do with exploratory\ntesting in principle</strong></p>\n<p><strong>e) Is correct. Exploratory testing will be more effective if the tester is\nexperienced, has domain knowledge and has a high degree of essential\nskills, like analytical skills, curiosity and creativeness</strong></p>"
  },
  {
   "n": 28,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.5.2",
   "selectCount": 1,
   "stem": "<p>Consider the following acceptance criteria for a user story written from the perspective of an online store owner.</p>\n<p>Given that the user is logged in and on the homepage,</p>\n<p>When the user clicks on the \"Add Item\" button,</p>\n<p>Then the \"Create Item\" form should appear,</p>\n<p>And the user should be able to input a name and price for the new item.</p>\n<p>In what format is this acceptance criteria written?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Rule-oriented"
    },
    {
     "letter": "b",
     "text": "Scenario-oriented"
    },
    {
     "letter": "c",
     "text": "Product-oriented"
    },
    {
     "letter": "d",
     "text": "Process-oriented"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Checklists should contain test conditions to be verified.\nThis is an example of an error, not a test condition; even if the tester\nwas able to deduce some potential test conditions from the examples of\nerrors, this error description is too general</strong></p>\n<p><strong>b) Is not correct. Checklists should not contain items that are better suited\nas exit criteria. This is an example of an exit criterion</strong></p>\n<p><strong>c) Is not correct. Checklists should not contain items that are too general.\nThis is a very general item, which practically describes a test objective</strong></p>\n<p><strong>d) Is correct. This is an example of a test condition that can be checked by\na human</strong></p>"
  },
  {
   "n": 29,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.5.3",
   "selectCount": 1,
   "stem": "<p>Your team analyzes the following user story in order to define the acceptance criteria:</p>\n<p>As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.</p>\n<p>Which of the following test cases will NOT be relevant for this user story?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Input: the customer logs into their account on the website and clicks the \"see order history\" button Expected result: the system shows a list of all the customer's previous orders, including the date, order number, and total cost"
    },
    {
     "letter": "b",
     "text": "Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities"
    },
    {
     "letter": "c",
     "text": "Input: the customer clicks \"Sort ascending\" button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order"
    },
    {
     "letter": "d",
     "text": "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The rule-oriented format includes formats like bullet point\nverification lists or tabulated forms of input-output mappings, explicitly\nshowing the rules to be followed. Given/When/Then is a scenario-\noriented format because it describes a scenario to be verified</strong></p>\n<p><strong>b) Is correct. This is a Given/When/Then format, which is scenario-oriented</strong></p>\n<p><strong>c) Is not correct. There is no \"product-oriented\" format of acceptance\n\ncriteria</strong></p>\n<p><strong>d) Is not correct. There is no \"process-oriented\" format of acceptance</strong></p>"
  },
  {
   "n": 30,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.3",
   "selectCount": 1,
   "stem": "<p>Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:</p>\n<p>(1) Code development (2) Submit code into a version control system and merge it into the \"test\" branch (3) Perform component testing for the submitted code</p>\n<p>Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Static analysis returns no high severity warnings for the submitted code"
    },
    {
     "letter": "b",
     "text": "System version control reports no conflicts when merging code into the \"test\" branch"
    },
    {
     "letter": "c",
     "text": "Component tests are compiled and ready to be executed"
    },
    {
     "letter": "d",
     "text": "Statement coverage is at least 80%"
    }
   ],
   "answer": "a",
   "explanation": "<p>criteria</p>\n<p><strong>a) Is not correct. The test case is related to viewing previous orders in the\n\norder history</strong></p>\n<p><strong>b) Is not correct. The test case is related to viewing previous orders</strong></p>\n<p><strong>c) Is not correct. The test case is related to viewing previous orders in the\n\norder history</strong></p>\n<p><strong>d) Is correct. The test case is related to the registration process, which is</strong></p>"
  },
  {
   "n": 31,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.4",
   "selectCount": 1,
   "stem": "<p>You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.</p>\n<p>The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th>Project</th><th>Development effort ($)</th><th>Test effort ($)</th></tr></thead>\n<tbody>\n<tr><td>P1</td><td>800,000</td><td>40,000</td></tr>\n<tr><td>P2</td><td>1,200,000</td><td>130,000</td></tr>\n<tr><td>P3</td><td>600,000</td><td>70,000</td></tr>\n<tr><td>P4</td><td>1,000,000</td><td>120,000</td></tr>\n</tbody></table></div>",
   "options": [
    {
     "letter": "a",
     "text": "$40,000"
    },
    {
     "letter": "b",
     "text": "$80,000"
    },
    {
     "letter": "c",
     "text": "$81,250"
    },
    {
     "letter": "d",
     "text": "$82,500"
    }
   ],
   "answer": "b",
   "explanation": "<p>not discussed in the user story. The user story is about viewing previous\norders</p>\n<p><strong>a) Is correct. This is something that can (and should) be checked before\nthe code is submitted to version control</strong></p>\n<p><strong>b) Is not correct. This is something that can be checked after step (2) is\nperformed, because merge conflict reporting can be done after the code\nis submitted and merged</strong></p>\n<p><strong>c) Is not correct. This fits better as the entry criterion for step (3)</strong></p>\n<p><strong>d) Is not correct. This fits better as the exit criterion for step (3)\nThe average development effort is $900,000 and the average test effort is\n$90,000 (calculated from the four projects).\nThe average test-to-development effort ratio is 1:10 ($90,000 : $900,000),\nwhich means that historically, on average, the test effort is 10% of the\ndevelopment effort.\nSo if the development effort is estimated to be $800,000, the estimated test\neffort is estimated as:</strong></p>"
  },
  {
   "n": 32,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.5",
   "selectCount": 1,
   "stem": "<p>You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER.</p>\n<p>You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority.</p>\n<p>Test Priority (1 = higher priority) 4 TC1 SEARCH for product A 4 3 TC2 SEARCH for product B 2 3 TC3 VIEW product A details 1 5 TC4 VIEW product B details</p>\n<p>TC5 ADD product A to a shopping cart</p>\n<p>TC6 ADD product B to a shopping cart</p>\n<p>TC7 place an ORDER</p>\n<p>You also identified the following logical dependencies between test cases: • SEARCH functionality must be tested before VIEW functionality can be tested. • VIEW functionality must be tested before ADD functionality. • ADD functionality must be tested before ORDER functionality.</p>\n<p>Which test case should be executed as the fourth one?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "TC3"
    },
    {
     "letter": "b",
     "text": "TC1"
    },
    {
     "letter": "c",
     "text": "TC7"
    },
    {
     "letter": "d",
     "text": "TC2"
    }
   ],
   "answer": "b",
   "explanation": "<p>10% * $800,000 = 0.1 * $800,000 = $80,000.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 33,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.7",
   "selectCount": 1,
   "stem": "<p>According to the testing quadrants model, which of the following falls into quadrant Q1 (\"technology facing\" and \"support the team\")?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Usability testing"
    },
    {
     "letter": "b",
     "text": "Functional testing"
    },
    {
     "letter": "c",
     "text": "User acceptance testing"
    },
    {
     "letter": "d",
     "text": "Component integration testing"
    }
   ],
   "answer": "d",
   "explanation": "<p>The logical dependencies mean that for each product you have to run\nSEARCH VIEW ADD before running ORDER. You can add more\nproducts (using the same flow), before you run ORDER.\nBased on this, TC1 or TC2 must be executed first, otherwise no progress\ncan be made.\nThe first priority should be given to VIEW and ADD product B, as its test\ncases (TC6, TC4) are assigned with higher priority.\nSo, the first 3 tests to execute are TC2 -&gt; TC4 -&gt; TC6\n\nNow we need to consider whether to run TC7 and then the entire flow for\nproduct A or run the TCs for product A first. If TC7 has lower priority than\nthe other tests, they should be tested first.\nTherefore, the entire flow should be:\nTC2 -&gt; TC4 -&gt; TC6 -&gt; TC1 -&gt; TC3 -&gt; TC5 -&gt; TC7</p>\n<p><strong>a) Is not correct. TC1 must be executed before TC3</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct. As shown above, TC7 is the last to be executed.</strong></p>\n<p><strong>d) Is not correct. Product B must be executed before product A</strong></p>"
  },
  {
   "n": 34,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.2.4",
   "selectCount": 1,
   "stem": "<p>Given the following risks: 1. Ineffective loop implementation causes long system responses 2. Consumers change their preferences 3. Flooding of the server room 4. Patients above a certain age receive inaccurate reports</p>\n<p>And the following mitigation activities: A. Risk acceptance B. Testing for performance efficiency C. Using boundary value analysis as the test technique D. Risk transfer</p>\n<p>Which of the following BEST matches the risks with the mitigation activities?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1C, 2D, 3A, 4B"
    },
    {
     "letter": "b",
     "text": "1B, 2D, 3A, 4C"
    },
    {
     "letter": "c",
     "text": "1B, 2A, 3D, 4C"
    },
    {
     "letter": "d",
     "text": "1C, 2A, 3D, 4B"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Usability testing is business facing testing that critiques\n\nthe product (Q3)</strong></p>\n<p><strong>b) Is not correct. Functional testing is business facing testing (Q2)</strong></p>\n<p><strong>c) Is not correct. User acceptance testing is business facing testing that\n\ncritiques the product (Q3)</strong></p>\n<p><strong>d) Is correct. Component integration testing is technology facing testing</strong></p>"
  },
  {
   "n": 35,
   "points": 1,
   "k": "K1",
   "lo": "FL-5.3.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is a product quality metric?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Mean time to failure"
    },
    {
     "letter": "b",
     "text": "Number of defects found"
    },
    {
     "letter": "c",
     "text": "Requirements coverage"
    },
    {
     "letter": "d",
     "text": "Defect detection percentage"
    }
   ],
   "answer": "a",
   "explanation": "<p>that supports the team (guides the development) (Q1)\n\n\n\nConsidering each of the listed risks and their mitigations:\n1. Long system responses (1) can be tested in performance testing\n(B)\n2. Changes in consumers' preferences (2) are usually out of our\ncontrol, so usually we accept this risk (A)\n3. Flooding of the server room (3) can cause significant loss, so we\nshould transfer the risk, e.g., by buying an insurance policy (D)\n4. That patients above a certain age receive inaccurate reports (4)\nsuggests a potential boundary problem, which can be effectively\ndetected with test techniques like BVA (C)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct. The correct combinations of risk and mitigation are: 1B, 2A,\n\n3D and 4C</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 36,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.3.3",
   "selectCount": 1,
   "stem": "<p>You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline.</p>\n<p>Which of the following is the LEAST effective way to communicate test progress to the customer?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Face-to-face"
    },
    {
     "letter": "b",
     "text": "Dashboards"
    },
    {
     "letter": "c",
     "text": "Email"
    },
    {
     "letter": "d",
     "text": "Video conferencing"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Product quality metrics measure quality characteristics. Mean\n\ntime to failure measures maturity, so it is a product quality metric</strong></p>\n<p><strong>b) Is not correct. This is an example of a defect metric, not a product\n\nquality metric</strong></p>\n<p><strong>c) Is not correct. This is an example of a coverage metric, not a product\n\nquality metric</strong></p>\n<p><strong>d) Is not correct. This is an example of a defect metric, not a product</strong></p>"
  },
  {
   "n": 37,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.4.1",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST describes an example of how configuration management (CM) supports testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment"
    },
    {
     "letter": "b",
     "text": "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage"
    },
    {
     "letter": "c",
     "text": "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end"
    },
    {
     "letter": "d",
     "text": "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
    }
   ],
   "answer": "a",
   "explanation": "<p>quality metric</p>\n<p><strong>a) Is correct. The client is in a different location and time zone, so it may\nbe difficult to communicate face-to-face</strong></p>\n<p><strong>b) Is not correct. Dashboards are usually available to any user at any time,\nso the difference in time zones will not be as much of a hindrance to\ncommunication as verbal, face-to-face communication</strong></p>\n<p><strong>c) Is not correct. Although the time difference between Europe and\nAmerica is several hours, and this may cause some inconvenience, it's\ncertainly not as great as with communicating face-to-face</strong></p>\n<p><strong>d) Is not correct. Video conferencing tools are a convenient means of\ncommunication. Although communication between Europe and America\nduring working hours usually requires one party to connect in the very\nearly or very late hours, this is not as much of an inconvenience as\nverbal, face-to-face communication</strong></p>"
  },
  {
   "n": 38,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.5.1",
   "selectCount": 1,
   "stem": "<p>You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows.</p>\n<p>Which of the following provides the BEST description of the failure that can be used in a defect report?</p>",
   "exhibit": "<div class=\"exhibit\"><pre>Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5\n\nTest run ID: 736\n\nStart 12:43:21.003\n\n12:43:21.003 Execution of TC1. Input: 3.               Output: 3.     Result: passed\n12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed\n12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8.     Result: failed\n12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2.  Result: failed\n12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed\n\nEnd 12:43:21.005\n\nTotal time of test cycle: 0:00:00.002</pre></div>",
   "options": [
    {
     "letter": "a",
     "text": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5."
    },
    {
     "letter": "b",
     "text": "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5."
    },
    {
     "letter": "c",
     "text": "The system fails to sort negative numbers. Reference: TC4, TC5."
    },
    {
     "letter": "d",
     "text": "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is correct. For a complex configuration item (e.g., a test environment),\nconfiguration management (CM) records the items it consists of, their\nrelationships, and versions</strong></p>\n<p><strong>b) Is not correct. CM tools do not execute test cases and do not calculate\ncoverage</strong></p>\n<p><strong>c) Is not correct. A CM tool is not a licensed management tool</strong></p>\n<p><strong>d) Is not correct. CM tools do not generate test data</strong></p>"
  },
  {
   "n": 39,
   "points": 1,
   "k": "K2",
   "lo": "FL-6.1.1",
   "selectCount": 1,
   "stem": "<p>Given the following descriptions: 1. Support workflow tracking 2. Facilitate communication 3. Virtual machines 4. Support reviews</p>\n<p>And the following test tool categories: A. Static testing tools B. Tools supporting scalability and deployment standardization C. DevOps tools D. Collaboration tools</p>\n<p>Which of the following BEST matches the descriptions and categories?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1A, 2B, 3C, 4D"
    },
    {
     "letter": "b",
     "text": "1B, 2D, 3C, 4A"
    },
    {
     "letter": "c",
     "text": "1C, 2D, 3B, 4A"
    },
    {
     "letter": "d",
     "text": "1D, 2C, 3A, 4B"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. While the sentence is true, it does not provide much value\nfor the developer</strong></p>\n<p><strong>b) Is correct. From the test results it seems that the system ignores\nduplicates and sorts the list disregarding the repetitions. This is probably\nthe cause of failures in TC3, TC4, TC5. Such information may help the\ndeveloper to find the defect and fix it more efficiently</strong></p>\n<p><strong>c) Is not correct. The system does not fail in sorting negative numbers.\nThe problem is rather in disregarding duplicates</strong></p>\n<p><strong>d) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren't\naware that the test cases have any defects</strong></p>"
  },
  {
   "n": 40,
   "points": 1,
   "k": "K1",
   "lo": "FL-6.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to be a benefit of test automation?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It provides coverage measures that are too complicated for humans to derive"
    },
    {
     "letter": "b",
     "text": "It shares responsibility for the testing with the tool vendor"
    },
    {
     "letter": "c",
     "text": "It removes the need for critical thinking when analyzing test results"
    },
    {
     "letter": "d",
     "text": "It generates test cases from an analysis of the program code"
    }
   ],
   "answer": "a",
   "explanation": "<p>Considering each of the listed tool categories and their descriptions:\nA. Static testing tools – support the tester in performing reviews and\nstatic analysis (4)\nB. Tools supporting scalability and deployment standardization – For\nexample, virtual machines, containerization tools (3)\nC. DevOps tools – support the DevOps delivery pipeline, workflow\ntracking, automated build process(es), continuous\nintegration/continuous delivery (CI/CD) (1)\nD. Collaboration tools – facilitate communication (2)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct. The correct match is: 1C, 2D, 3B, 4A</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  }
 ],
 "extras": []
};
