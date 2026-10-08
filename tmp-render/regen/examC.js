// ISTQB CTFL v4.0 Sample Exam C — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.C = {
 "id": "C",
 "title": "ISTQB CTFL 4.0 — Sample Exam C",
 "questions": [
  {
   "n": 1,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is a typical test objective?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Validating that documented requirements are met"
    },
    {
     "letter": "b",
     "text": "Causing failures and identifying defects"
    },
    {
     "letter": "c",
     "text": "Initiating errors and identifying root causes"
    },
    {
     "letter": "d",
     "text": "Verifying the test object meets user expectations"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Validating that documented requirements are met is\nincorrect as validation is concerned with meeting user requirements and\nexpectations, while verification is concerned with meeting specified\nrequirements, so this would be correct if we replaced `validating' with\n`verifying'</strong></p>\n<p><strong>b) Is correct. Causing failures and identifying defects is probably the most\ncommon objective of dynamic testing</strong></p>\n<p><strong>c) Is not correct. Initiating errors and identifying root causes is incorrect\nbecause testers do not initiate errors, they try to cause failures. Errors\nare typically made by developers (and cannot really be initiated) and\nresult in defects, which testers attempt to identify either directly through\nstatic testing or indirectly through failures with dynamic testing.\nIdentifying root causes is useful but is part of debugging, which is a\nseparate activity from testing</strong></p>\n<p><strong>d) Is not correct. Verifying the test object meets user expectations is\nincorrect as verification is concerned with checking specified\n(documented) requirements are met, while validation is concerned with\nmeeting user requirements and expectations, so this would be correct if\nwe replaced `verifying' with `validating'</strong></p>"
  },
  {
   "n": 2,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.1.2",
   "selectCount": 1,
   "stem": "<p>Which of the following statements BEST describes the difference between testing and debugging?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Testing causes failures while debugging fixes failures"
    },
    {
     "letter": "b",
     "text": "Testing is a negative activity while debugging is a positive activity"
    },
    {
     "letter": "c",
     "text": "Testing determines that defects exist while debugging removes defects"
    },
    {
     "letter": "d",
     "text": "Testing finds the cause of defects while debugging fixes the cause of defects"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Dynamic testing does cause failures (from which defects\ncan then be located and fixed). However, debugging is concerned with\nlocating defects and fixing these defects. Therefore, debugging does not\nfix failures</strong></p>\n<p><strong>b) Is not correct. Both testing and debugging contribute to improving the\nquality of the test object, so both should be considered positively.\nDebugging is generally considered to be a positive activity as it is fixing\nsomething. Dynamic testing does involve intentionally causing the test\nobject to fail, which is why some people consider it a negative activity,\nbut that is a very narrow view (and not one typically held by testers).\nBoth positive and negative test cases are possible. Positive test cases\ncheck that the test object correctly performs what it is supposed to do,\nwhile negative testing checks that the test object does not do what it is\nnot supposed to do</strong></p>\n<p><strong>c) Is correct. Testing determines that defects exist either directly through\nobservation of the defect in reviews (or by a tool in static analysis), or\nindirectly by causing a failure in dynamic testing. Debugging is a\nseparate activity from testing (normally performed by developers) and is\nconcerned with locating defects (only for dynamic testing) and fixing the\ndefects</strong></p>\n<p><strong>d) Is not correct. The causes of defects are typically human errors. Testing\nfinds defects either directly through static testing, or indirectly by\ncausing failures in dynamic testing, and debugging fixes defects. So,\ntesting does not find the cause of defects and debugging does not fix\nthe causes of defects</strong></p>"
  },
  {
   "n": 3,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.3.1",
   "selectCount": 1,
   "stem": "<p>The `absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Explaining that it is not possible for testing to show the absence of defects"
    },
    {
     "letter": "b",
     "text": "Supporting the end users to perform acceptance testing"
    },
    {
     "letter": "c",
     "text": "Ensuring that no implementation defects remain in the delivered system"
    },
    {
     "letter": "d",
     "text": "Modifying tests that cause no failures to ensure few defects remain"
    }
   ],
   "answer": "b",
   "explanation": "<p>The `absence-of-defects fallacy' is concerned with the idea that ensuring\ncorrectness in accordance with the requirements (i.e., verifying the absence\nof implementation defects) does not guarantee user satisfaction with the\nsystem. To address this it is also necessary to validate that the system\nmeets users' needs and expectations, fulfills business objectives, and\noutperforms competing systems.</p>\n<p><strong>a) Is not correct. The `testing shows the presence, not the absence of\ndefects' principle explains that while testing can detect the existence of\ndefects in the test object, it is not possible to demonstrate that there are\nno defects and, therefore, guarantee its correctness. Therefore,\nexplaining that it is not possible for testing to show the absence of\ndefects would partially address this principle, not the `absence-of-\ndefects' fallacy</strong></p>\n<p><strong>b) Is correct. By supporting the end user to perform acceptance testing it\nshould be possible to validate that the system meets users' needs and\nexpectations</strong></p>\n<p><strong>c) Is not correct. It is not possible to ensure that no implementation defects\nremain in the delivered system as the `testing shows the presence, not\nthe absence of defects' principle explains that while testing can detect\nthe existence of defects in the test object, it is not possible to\n\ndemonstrate that there are no defects and, therefore, guarantee its\ncorrectness</strong></p>\n<p><strong>d) Is not correct. Modifying tests that cause no failures to ensure few</strong></p>"
  },
  {
   "n": 4,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.1",
   "selectCount": 2,
   "stem": "<p>Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test implementation"
    },
    {
     "letter": "b",
     "text": "Test design"
    },
    {
     "letter": "c",
     "text": "Test execution"
    },
    {
     "letter": "d",
     "text": "Test monitoring"
    },
    {
     "letter": "e",
     "text": "Test analysis"
    }
   ],
   "answer": [
    "b",
    "e"
   ],
   "explanation": "<p>defects remain is one way to address the `tests wear out' principle. This\nprinciple is concerned with the idea that repeating identical tests on\n\nunaltered code is unlikely to uncover novel defects and therefore,\nmodifying tests may be essential. This will not validate that the system\nmeets users' needs and expectations\n\n\n\nGiven the following description of test analysis:\nTo identify the features that require testing, the test basis is analyzed and\ndefined as test conditions, which are then prioritized along with related\nrisks. The systematic identification of test conditions as coverage items\noften involves using test techniques both during test analysis and as part of\nthe test design activity.\nFrom the above description, it can be seen that test techniques are often\nused in the test analysis and test design activities. Boundary value analysis\nand equivalence partitioning are test techniques.</p>\n<p><strong>a) Is not correct. Test implementation is not likely to involve the use of test\ntechniques as it is mostly concerned with assembling test cases into\ntest procedures, while test techniques create test cases</strong></p>\n<p><strong>b) Is correct. Test design is likely to involve the use of test techniques to\ncreate test cases from test conditions and coverage items</strong></p>\n<p><strong>c) Is not correct. Test execution is not likely to involve the use of test\ntechniques as it is mostly concerned with executing test procedures\n(and so test cases), while test techniques create test cases</strong></p>\n<p><strong>d) Is not correct. Test monitoring is not likely to involve the use of test\ntechniques. Test monitoring is mostly concerned with ongoing checks to\nensure the plan is being followed, while test techniques create test\ncases</strong></p>\n<p><strong>e) Is correct. Test analysis is likely to involve the use of test techniques to\nidentify test conditions</strong></p>"
  },
  {
   "n": 5,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.3",
   "selectCount": 1,
   "stem": "<p>Given the following testware: 1. Coverage items 2. Change requests 3. Test execution schedule 4. Prioritized test conditions</p>\n<p>And the following test activities A. Test analysis B. Test design C. Test implementation D. Test completion</p>\n<p>Which of the following BEST shows the testware produced by the activities?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1B, 2D, 3C, 4A"
    },
    {
     "letter": "b",
     "text": "1B, 2D, 3A, 4C"
    },
    {
     "letter": "c",
     "text": "1D, 2C, 3A, 4B"
    },
    {
     "letter": "d",
     "text": "1D, 2C, 3B, 4A"
    }
   ],
   "answer": "a",
   "explanation": "<p>Considering each of the listed test activities and their output testware:\nA. Test analysis - prioritized test conditions (4) (e.g., acceptance\ncriteria), and defect reports for defects identified in the test basis\nB. Test design - prioritized test cases, test charters, coverage items\n(1), test data requirements, and test environment requirements\nC. Test implementation - test procedures, automated test scripts,\ntest suites, test data, test execution schedule (3), and test\nenvironment elements such as stubs, drivers, simulators, and\nservice virtualizations\nD. Test completion - test completion report, documented lessons\nlearned, action items for improvement, and change requests (2)\n(as product backlog items)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct. The correct match is: 1B, 2D, 3C, 4A</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 6,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.5",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about the different testing roles is MOST likely to be CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team"
    },
    {
     "letter": "b",
     "text": "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion"
    },
    {
     "letter": "c",
     "text": "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself"
    },
    {
     "letter": "d",
     "text": "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Although it is correct to say that in Agile software\ndevelopment, some of the test management tasks may be handled by\nthe Agile team itself, the testing role is not primarily the responsibility of\na single individual from outside the team. Instead the testing is more\nlikely to be performed by various team members following the whole-\nteam approach</strong></p>\n<p><strong>b) Is not correct. The test management role primarily involves activities\nrelated to test planning, test monitoring and test control, and test\ncompletion. So, although this statement is partially correct, it is wrong to\nsay that the testing role is primarily responsible for test monitoring and\ntest control</strong></p>\n<p><strong>c) Is correct. In Agile software development, some of the test management\ntasks may be handled by the Agile team itself. However, for test\nactivities that span multiple teams within an organization, test managers\noutside of the development team may perform these tasks</strong></p>\n<p><strong>d) Is not correct. The test management role primarily involves activities\nrelated to test planning, test monitoring and test control, and test\ncompletion, while the testing role is primarily responsible for the\ntechnical and engineering aspects of testing, such as test analysis, test\ndesign, test implementation, and test execution.</strong></p>"
  },
  {
   "n": 7,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.5.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is an advantage of the whole-team approach?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Teams with no testers"
    },
    {
     "letter": "b",
     "text": "Improved team dynamics"
    },
    {
     "letter": "c",
     "text": "Specialist team members"
    },
    {
     "letter": "d",
     "text": "Larger team sizes"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct. In the whole-team approach, testers play a vital role by\nsharing their testing expertise with the team and guiding product\ndevelopment. They collaborate with other team members to achieve the\ndesired quality levels and work with business representatives to create\nacceptance tests. Testers also partner with developers to determine the\noptimal test strategy and test automation approaches</strong></p>\n<p><strong>b) Is correct. By leveraging the diverse skill sets of each team member\nmost effectively, the whole-team approach fosters superior team\ndynamics, promotes robust communication and collaboration, and\ngenerates a synergistic effect that benefits the entire project</strong></p>\n<p><strong>c) Is not correct. The whole-team approach allows any team member with\nthe requisite skills and knowledge to undertake any task, thus specialist\nteam members are not an advantage of this approach</strong></p>\n<p><strong>d) Is not correct. There is no specific guidance on the optimum size of\nteams using the whole-team approach, and there is no suggestion that\nlarger teams are better</strong></p>"
  },
  {
   "n": 8,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.5.3",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about the independence of testing is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers"
    },
    {
     "letter": "b",
     "text": "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers"
    },
    {
     "letter": "c",
     "text": "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain"
    },
    {
     "letter": "d",
     "text": "Testers from outside the developer's team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. The primary benefit of independence of testing is that testers\nare more likely to identify different types of failures and defects\nVersion 1.6         compared to developers, due to their varied backgrounds, technical                    March 25, 2025\nviewpoints, and potential biases, including cognitive bias. However, the\nmain disadvantage of independence of testing is that testers may\nbecome isolated from the development team, leading to communication\nproblems, a lack of collaboration, and potentially an adversarial\nrelationship, with testers being blamed for delays and bottlenecks in the\nrelease process</strong></p>\n<p><strong>b) Is not correct. A developer's familiarity with the code does not mean that\nthey rarely find defects in it, instead this familiarity means they can\nefficiently find many defects in their own code. And, rather than\ndevelopers and testers having a shared background, developers having\na different background to testers is normally cited as the reason that\ntesters and developers find different kinds of defects</strong></p>\n<p><strong>c) Is not correct. Testing can be performed at different levels of\nindependence, ranging from no independence for the author to very\nhigh independence for testers from outside the organization. In most\nprojects, multiple levels of independence are utilized, with developers\nperforming component testing and component integration testing, the\ntest team performing system testing and system integration testing, and\nbusiness representatives performing acceptance testing. So, testers can\nbe in the developer's team and do not need to come from outside the\norganization. Knowledge of the application domain will change from\ncase to case and is not dependent on the level of independence</strong></p>\n<p><strong>d) Is not correct. Testing can be performed at different levels of\nindependence, ranging from no independence for the author to very\nhigh independence for testers from outside the organization, with testers\nfrom outside the developer's team generally more independent than\ntesters from within the team. However, there is more reason to believe\nthat testers from outside the team are likely to be more isolated from the\ndevelopers and so are more likely to be blamed for delays in product\nrelease</strong></p>"
  },
  {
   "n": 9,
   "points": 1,
   "k": "K1",
   "lo": "FL-2.1.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is a good testing practice that applies to all software development lifecycles?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "For each test level, there is a corresponding development level"
    },
    {
     "letter": "b",
     "text": "For each test objective, there is a corresponding development objective"
    },
    {
     "letter": "c",
     "text": "For every test activity, there is a corresponding user activity"
    },
    {
     "letter": "d",
     "text": "For every development activity, there is a corresponding test activity"
    }
   ],
   "answer": "d",
   "explanation": "<p>Page 14 of 37</p>\n<p><strong>a) Is not correct. Quality control applies to all development activities,\nmeaning that every software development activity has a corresponding\ntest activity. However, here we are attempting to equate test levels with\ndevelopment levels, and, although we know what is meant by `test\nlevels', there is no common understanding of the term ` development\nlevel'</strong></p>\n<p><strong>b) Is not correct. Every software development activity has a corresponding\ntest activity; however test objectives are quite different. For instance,\nthere might be a test objective of ensuring that a test object adheres to\na contractual requirement that a certain type of testing must be\nperformed before delivery. In this case there is no reason for there to be\na corresponding development objective</strong></p>\n<p><strong>c) Is not correct. Quality control applies to all development activities,\nmeaning that every software development activity has a corresponding\ntest activity. However, the same symmetry does not apply to testing and\nuser activities. For instance, for some systems it is difficult to even\nidentify the end users. Also, some test activities are focused on\ndevelopers (e.g., testing for ease of maintainability), which has no user\naspect to it</strong></p>\n<p><strong>d) Is correct. Quality control applies to all development activities, meaning\nthat every software development activity has a corresponding test\nactivity</strong></p>"
  },
  {
   "n": 10,
   "points": 1,
   "k": "K1",
   "lo": "FL-2.1.3",
   "selectCount": 1,
   "stem": "<p>Which of the following is an example of a test-first approach to development?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Component Test-Driven Development"
    },
    {
     "letter": "b",
     "text": "Integration Test-Driven Development"
    },
    {
     "letter": "c",
     "text": "System Test-Driven Development"
    },
    {
     "letter": "d",
     "text": "Acceptance Test-Driven Development"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Component Test-Driven Development is not a correct\nexample of a test-first approach to development</strong></p>\n<p><strong>b) Is not correct. Integration Test-Driven Development is not a correct\nexample of a test-first approach to development</strong></p>\n<p><strong>c) Is not correct. System Test-Driven Development is not a correct\nexample of a test-first approach to development</strong></p>\n<p><strong>d) Is correct. Acceptance Test-Driven Development (ATDD) is a well-\nknown example of a test-first approach to development</strong></p>"
  },
  {
   "n": 11,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.5",
   "selectCount": 1,
   "stem": "<p>Which of the following provides the BEST description of shift-left?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of `early testing saves time and money'"
    },
    {
     "letter": "b",
     "text": "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC"
    },
    {
     "letter": "c",
     "text": "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests"
    },
    {
     "letter": "d",
     "text": "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Practices involved in shift left are aimed at implementing\nmore test activities in the early phases of the software development life\ncycle (SDLC), portraying the SDLC as moving from left to right. There is\nno such thing as the left-hand side of the test process</strong></p>\n<p><strong>b) Is correct. Shift left emphasizes the importance of starting testing earlier\nin the SDLC. Implementing shift left testing necessitates additional\ntraining, and increased effort and costs during the early phases of the\nSDLC, nevertheless, overall savings should be higher</strong></p>\n<p><strong>c) Is not correct. Although automated component tests and component\nintegration tests for regression testing are generally valuable, the\ncreation of these tests is normally the responsibility of the developers,\nand if a continuous integration/continuous delivery (CI/CD) approach is\nfollowed, then these tests will have been submitted with the code. In\nsome situations the tester may automate tests for regression testing,\nand sometimes even for component tests and component integration\ntests, however this is not part of shift left which moves testing earlier in\nthe SDLC</strong></p>\n<p><strong>d) Is not correct. Training testers to perform tasks early in the SDLC would\nsupport a shift left approach by emphasizing the importance of starting\ntesting earlier in the SDLC. However, automating more test activities to\nbe performed later in the SDLC is not part of shift-left</strong></p>"
  },
  {
   "n": 12,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.6",
   "selectCount": 1,
   "stem": "<p>Which of the following is LEAST likely to occur as a result of a retrospective?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The quality of future test objects improves by identifying improvements in development practices"
    },
    {
     "letter": "b",
     "text": "Test efficiency improves by speeding up the configuration of test environments through automation"
    },
    {
     "letter": "c",
     "text": "End users' understanding of the development and test processes is improved"
    },
    {
     "letter": "d",
     "text": "Automated test scripts are enhanced through feedback from developers"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. One of the purposes of retrospectives is to identify\npotential process improvements, which, if put into practice, should result\nin the quality of future outputs of the development process (test objects)\nbeing higher. So, this is likely to occur as a result of a retrospective</strong></p>\n<p><strong>b) Is not correct. A benefit of retrospectives for testing includes increased\ntest efficiency through process improvements. So, this is likely to occur\nas a result of a retrospective</strong></p>\n<p><strong>c) Is correct. Participants at retrospectives typically include testers,\ndevelopers, architects, product owners, and business analysts, but end\nusers are rarely invited or attend these meetings – and they are also\nunlikely to receive any reports from these meetings. So, it is very\nunlikely that they will learn and understand more about the development\nand test processes through retrospectives</strong></p>\n<p><strong>d) Is not correct. A benefit of retrospectives for testing includes improved\nquality of testware (including automated test scripts) through joint\nreviews with developers. So, this is likely to occur as a result of a\nretrospective</strong></p>"
  },
  {
   "n": 13,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Component testing"
    },
    {
     "letter": "b",
     "text": "Component integration testing"
    },
    {
     "letter": "c",
     "text": "System integration testing"
    },
    {
     "letter": "d",
     "text": "Acceptance testing"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Component testing (also called unit testing) involves\ntesting individual components in isolation and is mostly verification\nagainst a specification, rather than validation against user needs.\nHowever, this testing is not normally performed by testers, as\ndevelopers usually carry out this testing in their development\nenvironment</strong></p>\n<p><strong>b) Is not correct. Component integration testing involves testing the\ninterfaces and interactions between components and is mostly\nverification against a specification, rather than validation against user\nneeds. However, this testing is not normally performed by testers, as\ndevelopers usually carry out this testing</strong></p>\n<p><strong>c) Is not correct. System integration testing examines the interfaces with\nother systems and external services and is mostly verification against a\nspecification, rather than validation against user needs. This type of\ntesting is also most often performed by testers</strong></p>\n<p><strong>d) Is correct. Acceptance testing focuses on validating that the system\nmeets the user's business needs and is ready for deployment. Ideally,\nthis testing is carried out by the end users</strong></p>"
  },
  {
   "n": 14,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.3",
   "selectCount": 1,
   "stem": "<p>The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Only confirmation testing"
    },
    {
     "letter": "b",
     "text": "Confirmation testing then regression testing"
    },
    {
     "letter": "c",
     "text": "Only regression testing"
    },
    {
     "letter": "d",
     "text": "Regression testing then confirmation testing"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Confirmation testing to check that the updates have\nresulted in a correct implementation is necessary, however, it would\nthen be sensible to perform regression testing to ensure that no defects\nhave been introduced or uncovered in unchanged areas of the system</strong></p>\n<p><strong>b) Is correct. Confirmation testing will check that the updates have resulted\nin a correct implementation, and then regression testing will be used to\nensure that no defects have been introduced or uncovered in\nunchanged areas of the system</strong></p>\n<p><strong>c) Is not correct. Regression testing should be used to ensure that no\ndefects have been introduced or uncovered in unchanged areas of the\nsystem when the update was made, however it is also necessary to\nperform confirmation testing that will check that the updates have\nresulted in a correct implementation</strong></p>\n<p><strong>d) Is not correct. Confirmation testing will check that the updates have\nresulted in a correct implementation, and regression testing will be used\nto ensure that no defects have been introduced or uncovered in\nunchanged areas of the system. However, when performed (i.e., when\nan update needs to be tested), confirmation testing precedes regression\ntesting</strong></p>"
  },
  {
   "n": 15,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.1.3",
   "selectCount": 1,
   "stem": "<p>Given the following example defects: i. Two different parts of the design specification disagree due to the complexity of the design ii. A response time is too long and so makes users lose patience iii. A path in the code cannot be reached during execution iv. A variable is declared but never subsequently used in the program v. The amount of memory needed by the program to generate a report is too high</p>\n<p>Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "ii, v"
    },
    {
     "letter": "b",
     "text": "iii, v"
    },
    {
     "letter": "c",
     "text": "i, ii, iv"
    },
    {
     "letter": "d",
     "text": "i, iii, iv"
    }
   ],
   "answer": "d",
   "explanation": "<p>Considering each of the listed example defects:\n\ni. Two different parts of the design specification disagree due to the\n\ncomplexity of the design – this is an example of a specification\n\ndefect, which includes inconsistencies, ambiguities,\n\ncontradictions, omissions, inaccuracies, and duplications, which\n\ncan most easily be found by static testing\n\nii. A response time is too long and so makes users lose patience –\n\nthis is an example of a response time defect, which can only be\n\ndetected in practice by executing the program and measuring the\n\nresponse time, which can most easily be found by dynamic\n\ntesting\n\niii. A path in the code cannot be reached during execution - this is an\n\nexample of a coding defect, which includes variables with\n\nundefined values, undeclared variables, duplicated or\n\nunreachable code, and excessive code complexity, which can\n\nmost easily be found by static testing\n\niv. A variable is declared but never subsequently used in the\n\nprogram - this is an example of a coding defect, which includes\n\nvariables with undefined values, undeclared variables, duplicated\n\nor unreachable code, and excessive code complexity, which can\n\nmost easily be found by static testing\n\nv. The amount of memory needed by the program to generate a\n\nreport is too high – this is an example of a performance defect,\n\nwhich can only be detected in practice by executing the program\n\nand measuring the memory used, which can most easily be found\n\nby dynamic testing</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct. The correct match for static testing is i, iii, and iv</strong></p>"
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
     "text": "Changes to requirements are understood and implemented earlier"
    },
    {
     "letter": "b",
     "text": "It ensures business stakeholders understand user requirements"
    },
    {
     "letter": "c",
     "text": "It allows product owners to change their requirements as often as they want"
    },
    {
     "letter": "d",
     "text": "End users are told which requirements will not be implemented prior to release"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Obtaining feedback from stakeholders early and often in the\nsoftware development process can be highly beneficial. It facilitates\nearly communication of potential quality issues, can prevent\nmisunderstandings about requirements, and ensures that any changes\nin stakeholder requirements are understood and implemented sooner</strong></p>\n<p><strong>b) Is not correct. The feedback is from stakeholders, so providing feedback\nis unlikely to improve their understanding of their own user requirements</strong></p>\n<p><strong>c) Is not correct. Obtaining feedback from stakeholders early and often in\nthe software development process can be highly beneficial. It facilitates\nearly communication of potential quality issues, can prevent\nmisunderstandings about requirements, and ensures that any changes\nin stakeholder requirements are understood and implemented sooner.\nHowever, because changes in requirements can be understood and\nimplemented sooner, it does not mean that unlimited changes to\nrequirements are encouraged</strong></p>\n<p><strong>d) Is not correct. The feedback is from stakeholders and does not cover\ncommunication to them. Communications with end users could include\ntelling them about which requirements will not be implemented prior to\nrelease, but ideally this should not happen at all</strong></p>"
  },
  {
   "n": 17,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.2.4",
   "selectCount": 1,
   "stem": "<p>Given the following review types: 1. Technical review 2. Informal review 3. Inspection 4. Walkthrough</p>\n<p>And the following descriptions: A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects C. The main objective is detecting potential defects and it requires metrics collection to support process improvement D. The main objective is detecting potential defects and it generates no formal documented output</p>\n<p>Which of the following BEST matches the review types and the descriptions?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1A, 2B, 3C, 4D"
    },
    {
     "letter": "b",
     "text": "1A, 2D, 3C, 4B"
    },
    {
     "letter": "c",
     "text": "1B, 2C, 3D, 4A"
    },
    {
     "letter": "d",
     "text": "1C, 2D, 3A, 4B"
    }
   ],
   "answer": "b",
   "explanation": "<p>Considering each of the listed review types:\n\n1. Technical review - This type of review is performed by technically\n\nqualified reviewers and led by a moderator. The objectives are to\n\ngain consensus and make decisions on technical problems while\n\nalso evaluating quality and building confidence in the work\n\nproduct, generating new ideas, motivating and enabling authors to\n\nimprove, and detecting anomalies\n\n2. Informal review - The main objective is to detect anomalies. The\n\nprocess is not defined and does not require formal documented\n\noutput\n\n3. Inspection - This is the most formal review type, and it follows the\n\ncomplete generic review process. The primary objective is to find\n\nthe most anomalies, and other objectives include evaluating\n\nquality and building confidence in the work product, motivating\n\nand enabling authors to improve, and collecting metrics that can\n\nbe used to enhance the software development lifecycle (SDLC),\n\nincluding the inspection process. The author cannot act as the\n\nreview leader or scribe\n\n4. Walkthrough - Led by the author, this type of review serves\n\nvarious objectives such as evaluating quality and building\n\nconfidence in the work product, educating reviewers, gaining\n\nconsensus, generating new ideas, motivating and enabling\n\nauthors to improve, and detecting anomalies. Reviewers might\n\nperform an individual review before the walkthrough, but this is\n\nnot mandatory\n\nA. Includes objectives such as gaining consensus, generating new\nideas, and motivating authors to improve\n\nB. Includes objectives such as educating reviewers, gaining\nconsensus, generating new ideas and detecting anomalies\n\nC. The main objective is detecting anomalies and it requires metrics\ncollection to support process improvement\n\n\n\nD. The main objective is detecting anomalies and it generates no\nformal documented output</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct.</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 18,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.5",
   "selectCount": 1,
   "stem": "<p>Which of the following is a factor that contributes to a successful review?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Ensure management participate as reviewers"
    },
    {
     "letter": "b",
     "text": "Split large work products into smaller parts"
    },
    {
     "letter": "c",
     "text": "Set reviewer evaluation as an objective"
    },
    {
     "letter": "d",
     "text": "Plan to cover one document per review"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. To ensure successful reviews, it is important to secure\n\nmanagement's support for the review process. However that does not\n\nmean that they should participate as reviewers</strong></p>\n<p><strong>b) Is correct. To ensure successful reviews, it's important to break the work\n\nproduct into parts that are small enough to be reviewed in a reasonable\n\ntimescale to prevent reviewers from losing focus during individual\n\nreviews or review meetings</strong></p>\n<p><strong>c) Is not correct. To ensure successful reviews, it's important to clearly\n\ndefine objectives and measurable exit criteria, without evaluating\n\nparticipants</strong></p>\n<p><strong>d) Is not correct. To ensure successful reviews, it's important to break</strong></p>"
  },
  {
   "n": 19,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.1.1",
   "selectCount": 1,
   "stem": "<p>What is the MAIN difference between black-box test techniques and experience-based test techniques?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The test object"
    },
    {
     "letter": "b",
     "text": "The test level at which the test technique is used"
    },
    {
     "letter": "c",
     "text": "The test basis"
    },
    {
     "letter": "d",
     "text": "The software development lifecycle (SDLC) in which the test technique can be used"
    }
   ],
   "answer": "c",
   "explanation": "<p>down the review into smaller chunks to prevent reviewers from losing\n\nfocus during individual reviews or review meetings. So you should not\n\nplan to cover one document per review</p>\n<p><strong>a) Is not correct. In most cases both black-box test techniques and\nexperience-based test techniques can be used for the same test objects</strong></p>\n<p><strong>b) Is not correct. Both black-box test techniques and experience-based\ntest techniques can be used at all test levels</strong></p>\n<p><strong>c) Is correct. Black-box test techniques (also known as specification-based\ntechniques) are based on an analysis of the specified behavior of the\ntest object without reference to its internal structure. So, the test basis is\nusually a specification. Experience-based test techniques effectively use\nthe knowledge and experience of testers for the design and\nimplementation of test cases. This means that the tester, when\ndesigning tests, may not use the specification at all</strong></p>\n<p><strong>d) Is not correct. Experience-based test techniques can detect defects that\nmay be missed using black-box (and white-box) test techniques. Hence,\nexperience-based test techniques are complementary to black-box test\ntechniques and white-box test techniques and both black-box test\ntechniques and experience-based test techniques can be used in all\nSDLCs</strong></p>"
  },
  {
   "n": 20,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.1",
   "selectCount": 1,
   "stem": "<p>You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions:</p>\n<p>Variable: PIN code length - four-digit PINs • The partition \"length correct\" - PINs with length other than 4 • The partition \"length incorrect\"</p>\n<p>Variable: Number of different digits • The partition \"number of different digits correct\" - PINs with at least two different digits • The partition \"number of different digits incorrect\" - PINs with all digits being the same</p>\n<p>Which of the following is the BEST set of input test data to cover the identified equivalence partitions?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "12, 1111, 1234, 12345"
    },
    {
     "letter": "b",
     "text": "1, 123, 1111, 1234"
    },
    {
     "letter": "c",
     "text": "11, 12, 1111, 12345"
    },
    {
     "letter": "d",
     "text": "123, 1222, 12345"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct.\n– Value \"12\" covers \"length incorrect, too few digits\"\n– Value \"1111\" covers \"length correct\" and \"number of different\ndigits incorrect</strong></p>"
  },
  {
   "n": 21,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.2",
   "selectCount": 1,
   "stem": "<p>A developer was asked to implement the following business rule:</p>\n<p>INPUT: value (integer number)</p>\n<p>IF (value 100 OR value 200) THEN write \"value incorrect\"</p>\n<p>ELSE write \"value OK\"</p>\n<p>You design the test cases using 2-value boundary value analysis.</p>\n<p>Which of the following sets of test inputs achieves the greatest coverage?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "100, 150, 200, 201"
    },
    {
     "letter": "b",
     "text": "99, 100, 200, 201"
    },
    {
     "letter": "c",
     "text": "98, 99, 100, 101"
    },
    {
     "letter": "d",
     "text": "101, 150, 199, 200"
    }
   ],
   "answer": "d",
   "explanation": "<ul><li>Value \"1234\" again covers \"length correct\" and \"number of\ndifferent digits correct\"</li><li>Value \"12345\" covers \"length incorrect, too many digits\"</li></ul>\n<p><strong>b) Is not correct. All partitions are covered, however it only covers the\nlower side of \"length incorrect\"</strong></p>\n<p><strong>c) Is not correct. There are no value covering \"correct PIN\"</strong></p>\n<p><strong>d) Is not correct. There are no value covering \"number of different digits\"</strong></p>"
  },
  {
   "n": 22,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.3",
   "selectCount": 1,
   "stem": "<p>You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.</p>\n<p>R1 R2 R3 C1: First attempt at the exam? - -F C2: Theoretical exam passed? T F- -F C3: Practical exam passed? T Issue a driving license? X X X Request additional driving lessons? Request to take the exam again?</p>\n<p>What test data will show that there are contradictory rules in the decision table?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "C1 = T, C2 = T, C3 = F"
    },
    {
     "letter": "b",
     "text": "C1 = T, C2 = F, C3 = T"
    },
    {
     "letter": "c",
     "text": "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T"
    },
    {
     "letter": "d",
     "text": "C1 = F, C2 = F, C3 = F"
    }
   ],
   "answer": "d",
   "explanation": "<p>The equivalence partitions are: {..., 99, 100}, {101, 102, ..., 198, 199}, {200,\n201, ...}.\nThus, there are 4 boundary values, which are: 100, 101, 199 and 200.\nIn 2-value BVA, for each boundary value there are two coverage items (the\nboundary value and its closest neighbor belonging to the adjacent partition).\nAs the closest neighbors are also boundary values in the adjacent partition,\nthen there are just four coverage items.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct. Only 100 and 200 are valid coverage items for 2-value\n\nBVA, so we achieve 50% coverage</strong></p>\n<p><strong>b) Is not correct. Only 100 and 200 are valid coverage items for 2-value\n\nBVA, so we achieve 50% coverage</strong></p>\n<p><strong>c) Is not correct. Only 100 and 101 are valid coverage items for 2-value\n\nBVA, so we achieve 50% coverage</strong></p>\n<p><strong>d) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA,</strong></p>"
  },
  {
   "n": 23,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.4",
   "selectCount": 1,
   "stem": "<p>You are designing test cases based on the following state transition diagram:</p>\n<p>What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "3"
    },
    {
     "letter": "b",
     "text": "2"
    },
    {
     "letter": "c",
     "text": "5"
    },
    {
     "letter": "d",
     "text": "6"
    }
   ],
   "answer": "a",
   "explanation": "<p>so we achieve 75% coverage</p>\n<p><strong>a) Is not correct. The combination (T, T, F) does not match any rule. This\n\nis an example of omission, not a contradiction</strong></p>\n<p><strong>b) Is not correct. The combination (T, F, T) matches only one column, R2,\n\nso there is no contradiction</strong></p>\n<p><strong>c) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one\n\ncolumn, R1, so there is no contradiction</strong></p>\n<p><strong>d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2</strong></p>"
  },
  {
   "n": 24,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.2",
   "selectCount": 1,
   "stem": "<p>You want to apply branch testing to the code represented by the following control flow graph.</p>\n<p>How many coverage items do you need to test?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "2"
    },
    {
     "letter": "b",
     "text": "4"
    },
    {
     "letter": "c",
     "text": "8"
    },
    {
     "letter": "d",
     "text": "7"
    }
   ],
   "answer": "c",
   "explanation": "<p>and R3 have different actions, so this shows a contradiction between R2\n\nand R3.\n\n\n\nThe following three transitions:\n\"REQUESTING -&gt; CONFIRMED\"\n\"WAITING LIST -&gt; CONFIRMED\"\n\"WAITING LIST -&gt; END\"\ncannot appear in the same test case, which suggests that at least three test\ncases are required. All the other transitions can appear in combination with\none or more of these three transitions, so we need a minimum of three test\ncases. In fact, only three sequences are possible:</p>\n<ul><li>TC1: START (Room request)  REQUESTING (Available)\nCONFIRMED (Pay)  END</li><li>TC2: START (Room request)  REQUESTING (Not available)\nWAITING LIST (Available)  CONFIRMED (Pay)  END</li><li>TC3: START (Room request)  REQUESTING (Not available)\nWAITING LIST (Cancel)  END</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct\nIn branch testing the coverage items are branches, which are represented\nby the edges of a control flow graph. There are 8 edges in the control flow\ngraph.</strong></p>"
  },
  {
   "n": 25,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.3",
   "selectCount": 1,
   "stem": "<p>How can white-box testing be useful in support of black-box testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests"
    },
    {
     "letter": "b",
     "text": "White-box coverage analysis can help testers identify unreachable fragments of the source code"
    },
    {
     "letter": "c",
     "text": "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique"
    },
    {
     "letter": "d",
     "text": "White-box test techniques can provide coverage items for black-box techniques"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 26,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.1",
   "selectCount": 1,
   "stem": "<p>Consider the following list: • Correct input not accepted • Incorrect input accepted • Wrong output format • Division by zero</p>\n<p>What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Exploratory testing"
    },
    {
     "letter": "b",
     "text": "Fault attack"
    },
    {
     "letter": "c",
     "text": "Checklist-based testing"
    },
    {
     "letter": "d",
     "text": "Boundary value analysis"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is correct. Performing only black-box testing does not provide a\nmeasure of actual code coverage. White-box coverage measures\nprovide an objective measurement of coverage and provide the\nnecessary information to allow additional tests to be generated to\nincrease this coverage, and subsequently increase confidence in the\ncode</strong></p>\n<p><strong>b) Is not correct. This statement is correct, but it has nothing to do with\nblack-box testing</strong></p>\n<p><strong>c) Is not correct. In general there are no relationships between white-box\ntest techniques and black-box test techniques</strong></p>\n<p><strong>d) Is not correct. White-box test techniques are used to design tests based\non the test object itself, while black-box test techniques are used to\ndesign tests based on the specification. Therefore, there is no relation\nbetween coverage items derived from these two types of test\ntechniques</strong></p>"
  },
  {
   "n": 27,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.3",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST describes how using checklist-based testing can result in increased coverage?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items"
    },
    {
     "letter": "b",
     "text": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage"
    },
    {
     "letter": "c",
     "text": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software"
    },
    {
     "letter": "d",
     "text": "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Exploratory testing uses test charters, not a list of\npossible defects/failures. Although exploratory testing can incorporate\nthe use of other test techniques, in this case a fault attack is the most\nlikely option</strong></p>\n<p><strong>b) Is correct. This is a list of possible failures. Fault attacks are a\nmethodical approach to the implementation of error guessing and\nrequire the tester to create or acquire a list of possible errors, defects\nand failures, and to design tests that will identify defects associated with\nthe errors, expose the defects, or cause the failures</strong></p>\n<p><strong>c) Is not correct. The tester is using a checklist of items to support their\ntesting. Both error guessing and checklist-based testing use such lists,\nhowever, the list here is of possible failures, not test conditions, and so\nthe MOST PROBABLE test technique is fault attack, which focuses on\nerrors, defects and failures</strong></p>\n<p><strong>d) Is not correct. BVA is based on an analysis of boundary values of\nequivalence partitions. The above list does not mention equivalence\npartitions or their boundaries</strong></p>"
  },
  {
   "n": 28,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.5.2",
   "selectCount": 1,
   "stem": "<p>Which of the following provides the BEST example of a scenario-oriented acceptance criterion?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The application must allow users to delete their account and all associated data upon request"
    },
    {
     "letter": "b",
     "text": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so"
    },
    {
     "letter": "c",
     "text": "IF (contain(product(23).Name, cart.products())) THEN return FALSE"
    },
    {
     "letter": "d",
     "text": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Although it is true that the tester can implement and\nexecute detailed test cases based on the checklist, it does not explain\nhow this would result in increased coverage</strong></p>\n<p><strong>b) Is not correct. Checklist items should not be automated. But even if they\nare, the automated test scripts always execute the tests in the same\nway, which usually does not result in increased coverage</strong></p>\n<p><strong>c) Is not correct. It is true that each checklist item should be tested\nseparately and independently. But this impacts the test execution order\nand does not impact the achieved coverage, and so does not result in\nincreased coverage</strong></p>\n<p><strong>d) Is correct. If the checklists are high-level, some variability in the actual\ntesting is likely to occur, resulting in potentially greater coverage but\nless repeatability. If two testers follow a checklist of high-level items,\neach of them may use different test data, test steps, etc. This way, one\ntester will probably cover some areas not covered by the other tester\nand this will result in increased coverage</strong></p>"
  },
  {
   "n": 29,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.5.3",
   "selectCount": 1,
   "stem": "<p>You are using acceptance test-driven development and designing test cases based on the following user story:</p>\n<p>As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors.</p>\n<p>Acceptance Criteria:</p>\n<p>AC1: Regular users have access to floors 1 to 3 AC2: Floor 4 is only accessible to Special users AC3: Special users have all the access rights of Regular users</p>\n<p>Which test case is the MOST reasonable one to test AC3?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Check that a Regular user can access floors 1 and 3"
    },
    {
     "letter": "b",
     "text": "Check that a Regular user cannot access floor 4"
    },
    {
     "letter": "c",
     "text": "Check that a Special user can access floor 5"
    },
    {
     "letter": "d",
     "text": "Check that a Special user can access floors 1, 2 and 3"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. This acceptance criterion describes what rules or\nregulations the system must adhere to (in this case, the right to be\nforgotten). This is an example of a rule-oriented acceptance criterion</strong></p>\n<p><strong>b) Is correct. This acceptance criterion describes an example scenario that\nmust be realized by the system. This is an example of a scenario-\noriented acceptance criterion</strong></p>\n<p><strong>c) Is not correct. This sentence looks more like a line of code that\nimplements some business rule. Acceptance criteria should be written in\ncollaboration with business representatives, and therefore should be\nwritten in language they understand. This sentence will most likely be\nunintelligible to these stakeholders</strong></p>\n<p><strong>d) Is not correct. This acceptance criterion describes what rules or\nregulations the system must adhere to and how compliance will be\nensured. Therefore, this is an example of a rule-oriented acceptance\ncriterion, not a scenario-based acceptance criterion</strong></p>"
  },
  {
   "n": 30,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT a purpose of a test plan?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "To define test data and expected results for component tests and component integration tests"
    },
    {
     "letter": "b",
     "text": "To define as exit criteria from the component test level that \"100% statement coverage and 100% branch coverage must be achieved\""
    },
    {
     "letter": "c",
     "text": "To describe what fields the test progress report shall contain and what should be the form of this report"
    },
    {
     "letter": "d",
     "text": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is not correct. We want to check that Special users have the rights of\nRegular users, so we need to test access rights for a Special user, not\nfor a Regular user</strong></p>\n<p><strong>b) Is not correct. We want to check that Special users have the rights of\nRegular users, so we need to test access rights for a Special user, not\nfor a Regular user</strong></p>\n<p><strong>c) Is not correct. There is no floor 5 described in the acceptance criteria.\nThe test cases should not extend the scope of the user story. But even\nif we would like to perform negative testing, this test is not directly\nrelated to AC3</strong></p>\n<p><strong>d) Is correct. This is the way we can check if a Special user can access\nfloors which are accessible to a Regular user</strong></p>"
  },
  {
   "n": 31,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.4",
   "selectCount": 1,
   "stem": "<p>At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation:</p>\n<p>() = 3 ( - 1) + ( - 2) 4</p>\n<p>The graph shows the estimated and actual amount of work for the first four iterations.</p>\n<p>Estimated and actual effort (in person-days)</p>\n<p>13 Iteration #2 Iteration #3 Iteration #4 12 11 10</p>\n<p>9 8 7 6 5 4 3 2 1 0</p>\n<p>Iteration #1</p>\n<p>Estimated Actual</p>\n<p>What is the estimated amount of work for iteration #5?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "10.5 person-days"
    },
    {
     "letter": "b",
     "text": "8.25 person-days"
    },
    {
     "letter": "c",
     "text": "6.5 person-days"
    },
    {
     "letter": "d",
     "text": "9.4 person-days"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is correct. The test plan may include test data requirements (as part of\nthe test approach), but not the detailed test data for test cases. Test\ndata is part of the test cases, not the test plan. Also, it is usually\nimpossible to define such data when the test plan is created, because it\nis not exactly known what the components will look like</strong></p>\n<p><strong>b) Is not correct. One of the purposes of a test plan is to help ensure that\ntest activities will meet the established criteria, by including entry criteria\nand exit criteria. The code coverage criteria are an example of such\ncriteria for the component test level</strong></p>\n<p><strong>c) Is not correct. Documentation templates are typical content of a test\nplan. This helps to facilitate communication between the stakeholders\nby defining a standard way of communicating or reporting</strong></p>\n<p><strong>d) Is not correct. One of the purposes of a test plan is to demonstrate that\ntesting will adhere to the existing test policy and test strategy, or to\nexplain why the testing will deviate from them. This is an example of\nexplaining the deviation, regarding the test levels that will be (or will not\nbe) followed</strong></p>"
  },
  {
   "n": 32,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.5",
   "selectCount": 1,
   "stem": "<p>You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.</p>\n<p>The following figure includes the priorities of these test cases (1=highest priority, 3 = lowest priority).</p>\n<p>The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.</p>\n<p>Which test case should be executed sixth?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "TC 3"
    },
    {
     "letter": "b",
     "text": "TC 5"
    },
    {
     "letter": "c",
     "text": "TC 6"
    },
    {
     "letter": "d",
     "text": "TC 2"
    }
   ],
   "answer": "a",
   "explanation": "<p>From the graph we have:\nA(4)=6 and A(3)=8 (the last two gray boxes).\n\nFrom the formula we obtain:\nE(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 33,
   "points": 1,
   "k": "K1",
   "lo": "FL-5.1.6",
   "selectCount": 1,
   "stem": "<p>What does the test pyramid model show?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "That tests may have different priorities"
    },
    {
     "letter": "b",
     "text": "That tests may have different granularity"
    },
    {
     "letter": "c",
     "text": "That tests may require different coverage criteria"
    },
    {
     "letter": "d",
     "text": "That tests may depend on other tests"
    }
   ],
   "answer": "b",
   "explanation": "<p>We want to run test cases according to their priorities, but we also need to\nconsider the dependencies.\nIf we only consider priorities, we want to first run TC 5 and TC 7 (highest\npriority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest\npriority).\nHowever, in order to run TC 7, we need to first run TC 4.\nIn order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by\nTC 1, which should be run prior to TC 2.\nSo, in order to run priority 1 test cases as early as possible, the first five test\ncases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5.\nNext, we need to run TC 3, because it has higher priority than TC 6.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 34,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.7",
   "selectCount": 1,
   "stem": "<p>What is the relationship between the testing quadrants, test levels and test types?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle"
    },
    {
     "letter": "b",
     "text": "Testing quadrants describe the degree of granularity of individual test types performed at each test level"
    },
    {
     "letter": "c",
     "text": "Testing quadrants assign the test types that can be performed to the test levels"
    },
    {
     "letter": "d",
     "text": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The test pyramid model does not provide information\n\nabout test priorities</strong></p>\n<p><strong>b) Is correct. The test pyramid model shows that different tests have\n\ndifferent levels of granularity</strong></p>\n<p><strong>c) Is not correct. The test pyramid model is independent of coverage\n\ncriteria</strong></p>\n<p><strong>d) Is not correct. Test pyramid model does not show any relations between</strong></p>"
  },
  {
   "n": 35,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.2.3",
   "selectCount": 1,
   "stem": "<p>Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Continuous risk monitoring allows us to identify an emerging risk as soon as possible"
    },
    {
     "letter": "b",
     "text": "Risk identification allows us to implement risk mitigation activities and reduce the risk level"
    },
    {
     "letter": "c",
     "text": "The assessed risk level helps us to select the rigor of testing"
    },
    {
     "letter": "d",
     "text": "Risk analysis allows us to derive coverage items"
    }
   ],
   "answer": "c",
   "explanation": "<p>different tests</p>\n<p><strong>a) Is not correct. Testing quadrants group test levels and test types\nseparately according to several criteria. They do not represent any\ncombinations of test levels and test types and they are not related to\nany location within a software development lifecycle. Both test levels\nand test types are treated separately in the testing quadrants model</strong></p>\n<p><strong>b) Is not correct. Testing quadrants group test levels and test types\naccording to several criteria. They do not describe the degree of\ngranularity of individual test types performed at each test level. Such a\nmodel, regarding the test levels, is called the test pyramid</strong></p>\n<p><strong>c) Is not correct. The statement is wrong, because in general any test type\ncan be performed at any test level</strong></p>\n<p><strong>d) Is correct. The testing quadrants group test levels, test types, test\nactivities, test techniques and work products in Agile software\ndevelopment. In this model, tests can be business facing or technology\nfacing. Tests can support the team (i.e., guide the development) or\ncritique the product (i.e., measure its behavior against expectations).\nThe combination of these two viewpoints determines the four quadrants</strong></p>"
  },
  {
   "n": 36,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.3.2",
   "selectCount": 1,
   "stem": "<p>Which of the following activities in the test process makes the MOST use of test progress reports?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test design"
    },
    {
     "letter": "b",
     "text": "Test completion"
    },
    {
     "letter": "c",
     "text": "Test analysis"
    },
    {
     "letter": "d",
     "text": "Test planning"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Risk monitoring is part of risk control, not risk analysis</strong></p>\n<p><strong>b) Is not correct. Risk identification itself does not allow us to implement\n\nrisk mitigation activities. The mitigating actions are defined during the\nrisk control phase</strong></p>\n<p><strong>c) Is correct. This is an example of how risk analysis influences the\nthoroughness and scope of testing</strong></p>\n<p><strong>d) Is not correct. Coverage items are derived using test techniques, not\nthrough risk analysis</strong></p>"
  },
  {
   "n": 37,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.4.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT an example of how configuration management supports testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "All commits to the repository are uniquely identified and version controlled"
    },
    {
     "letter": "b",
     "text": "All changes in the test environment elements are tracked"
    },
    {
     "letter": "c",
     "text": "All requirement specifications are referenced unambiguously in test plans"
    },
    {
     "letter": "d",
     "text": "All identified defects have an assigned status"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Test progress reports are mostly used during test\nmonitoring and test control, and test completion, not during test design</strong></p>\n<p><strong>b) Is correct. A test completion report is prepared during test completion,\nwhen a project, test level, or test type is complete and when, ideally, its\nexit criteria have been met. This report uses information from test\nprogress reports and other data</strong></p>\n<p><strong>c) Is not correct. Test progress reports are mostly used during test\nmonitoring and test control, and test completion, not during test analysis</strong></p>\n<p><strong>d) Is not correct. Test progress reports are most used during test\nmonitoring and test control, and test completion, not during test planning</strong></p>"
  },
  {
   "n": 38,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.5.1",
   "selectCount": 1,
   "stem": "<p>Consider the following defect report for a web-based shopping application:</p>\n<p>Application: WebShop v0.99</p>\n<p>Defect: Login button not working</p>\n<p>Steps to Reproduce:</p>\n<p>Launch the website Click on the login button</p>\n<p>Expected result: The user should be redirected to the login page. Actual result: The login button does not respond when clicked.</p>\n<p>Severity: High Priority: Urgent</p>\n<p>What is the MOST important information that is missing from this defect report?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Name of the tester and date"
    },
    {
     "letter": "b",
     "text": "Test environment elements and their version numbers"
    },
    {
     "letter": "c",
     "text": "Identification of the test object"
    },
    {
     "letter": "d",
     "text": "Impact on the interests of stakeholders"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. When a user reports a software failure, thanks to the\nunique identification of commits, it is possible to reassemble the files\nfrom the software version which was used by the user (as well as the\ncorresponding versions of the test scripts) and thus reproduce the\nfailure and locate the defect faster</strong></p>\n<p><strong>b) Is not correct. If a change to the test environment causes unexpected\nissues during testing, configuration management allows testers to roll\nback to a previous version of the environment. This ensures that testing\ncan continue without being affected by the change</strong></p>\n<p><strong>c) Is not correct. Configuration management ensures that all identified\ndocumentation (e.g., requirement specifications) and software items are\nreferenced unambiguously in test documentation (e.g., test plans)</strong></p>\n<p><strong>d) Is correct. This is ensured by defect management, not by the\nconfiguration management process</strong></p>"
  },
  {
   "n": 39,
   "points": 1,
   "k": "K2",
   "lo": "FL-6.1.1",
   "selectCount": 1,
   "stem": "<p>Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test execution and coverage tools"
    },
    {
     "letter": "b",
     "text": "Test design and implementation tools"
    },
    {
     "letter": "c",
     "text": "Defect management tools"
    },
    {
     "letter": "d",
     "text": "Test management tools"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. This is important, but not as important as test\nenvironment elements</strong></p>\n<p><strong>b) Is correct. The important thing that is missing is the identification of the\nbrowser and device used for the testing. The browser and device\ninformation are important because such a defect can be browser- or\ndevice-specific. For example, a login button may work fine on one\nbrowser (or one version of a specific browser) but not on another.\nTherefore, the browser and device information can help the developers\nto reproduce the issue and find the root cause of the problem more\nquickly</strong></p>\n<p><strong>c) Is not correct. The test object is identified (WebShop v0.99)</strong></p>\n<p><strong>d) Is not correct. The impact is included – this is severity (high)</strong></p>"
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
     "text": "The capability of generating test cases without access to the test basis"
    },
    {
     "letter": "b",
     "text": "The achievement of increased coverage through more objective assessment"
    },
    {
     "letter": "c",
     "text": "The increase in test execution times available with higher processing power"
    },
    {
     "letter": "d",
     "text": "The prevention of human errors through greater consistency and repeatability"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Test execution and coverage tools facilitate the\n\nautomated execution of test cases and the measurement of the\ncoverage achieved by running those test cases. However, these tools\ndo not help with the organization of defects and configuration\nmanagement</strong></p>\n<p><strong>b) Is not correct. Test design and test implementation tools facilitate the\ngeneration of test cases, test data and test procedures, but they do not\nhelp with the organization of defects and configuration management</strong></p>\n<p><strong>c) Is not correct. Defect management tools are used to manage defects\nbut are not testing tools and are not used to organize test cases or\nconfiguration management</strong></p>\n<p><strong>d) Is correct. Test management tools increase the test process efficiency\nby facilitating the management of the software development lifecycle\n(SDLC), requirements, tests, defects, and configuration management</strong></p>"
  }
 ],
 "extras": []
};
