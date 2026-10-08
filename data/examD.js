// ISTQB CTFL v4.0 Sample Exam D — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.D = {
 "id": "D",
 "title": "ISTQB CTFL 4.0 — Sample Exam D",
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
     "text": "Finding and fixing defects in the test object"
    },
    {
     "letter": "b",
     "text": "Maintaining effective communications with developers"
    },
    {
     "letter": "c",
     "text": "Validating that legal requirements have been met"
    },
    {
     "letter": "d",
     "text": "Building confidence in the quality of the test object"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Finding and fixing defects in the test object is not a typical\ntest objective as although identifying defects is an objective of testing,\nfixing defects is not a test activity</strong></p>\n<p><strong>b) Is not correct. Maintaining effective communications with developers is\nnot a typical test objective although it is useful in achieving other\nobjectives of testing, such as providing stakeholders with information\nthat enables them to make informed decisions. It is not a primary reason\nfor performing testing</strong></p>\n<p><strong>c) Is not correct. Validating that legal requirements have been met is not a\ntypical test objective because validation is concerned with checking\nwhether the system meets users' and other stakeholders' needs in its\noperational environment. Checking that legal requirements have been\nmet is a form of verification</strong></p>\n<p><strong>d) Is correct. Building confidence in the quality of the test object is\nachieved by executing tests that passed</strong></p>"
  },
  {
   "n": 2,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.2.3",
   "selectCount": 1,
   "stem": "<p>A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect.</p>\n<p>Which of the following statements is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The miscalculation of bonuses is a defect that occasionally occurs"
    },
    {
     "letter": "b",
     "text": "The fine received for failing to address some disabled users is a failure"
    },
    {
     "letter": "c",
     "text": "The programmer working under severe time pressure is a root cause"
    },
    {
     "letter": "d",
     "text": "The design of the user interface includes a designer error"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. The miscalculation of bonuses is a failure by the system,\nnot a defect</strong></p>\n<p><strong>b) Is not correct. The system not suitably supporting disabled users is a\nfailure which eventually results in a fine, but the fine itself is not a failure\n(it appears to be the correct functioning of the regulatory system)</strong></p>\n<p><strong>c) Is correct. The error is made by the programmer and this mistake is\ncaused by them working under severe time pressure, which is the root\ncause of the subsequent defect</strong></p>\n<p><strong>d) Is not correct. The poor design of the user interface, which does not\nsuitably address disabled users, is a design defect caused by the\ndesigner error.</strong></p>"
  },
  {
   "n": 3,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.3.1",
   "selectCount": 1,
   "stem": "<p>Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which of the following `principles of testing' is being addressed through the variation of test cases?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Tests wear out"
    },
    {
     "letter": "b",
     "text": "Absence-of-defects fallacy"
    },
    {
     "letter": "c",
     "text": "Early testing saves time and money"
    },
    {
     "letter": "d",
     "text": "Defects cluster together"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct. The `tests wear out' principle is concerned with the idea that\nrepeating identical tests on unaltered code is unlikely to uncover novel\ndefects and therefore, modifying tests may be essential. By using test\nconditions to generate new tests each time, the tests will not be identical\nand the risk of the tests wearing out is reduced</strong></p>\n<p><strong>b) Is not correct. The `absence-of-defects fallacy' principle is concerned\nwith ensuring that users' needs are fulfilled even if lots of testing is done\nand no defects are found (i.e., validation is also necessary). The use of\ntest conditions to generate test cases and execute tests does not\ndirectly address this concern</strong></p>\n<p><strong>c) Is not correct. The `early testing saves time and money' principle is\nconcerned with fixing defects early on to prevent the occurrence of\nsubsequent defects in derived work products, thereby reducing costs\nand the likelihood of failures. This is typically addressed by starting\ntesting (both static and dynamic) as early as possible, but this is not\naddressed by using test conditions to generate test cases and execute\ntests</strong></p>\n<p><strong>d) Is not correct. The `Defects cluster together' principle is concerned with\nthe distribution of defects in a system, which typically follows a Pareto\ndistribution. The use of test conditions to generate test cases and\nexecute tests does not address this concern, which is typically\naddressed by risk-based testing</strong></p>"
  },
  {
   "n": 4,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.1",
   "selectCount": 1,
   "stem": "<p>Given the following test tasks:</p>\n<ul style='list-style-type:none;padding-left:14px'><li>1. Derive test cases from test conditions</li>\n<li>2. Identify reusable testware</li>\n<li>3. Organize test cases into test procedures</li>\n<li>4. Evaluate the test basis and the test object</li></ul>\n<p>And the following test activities:</p>\n<ul style='list-style-type:none;padding-left:14px'><li>A. Test analysis</li>\n<li>B. Test design</li>\n<li>C. Test implementation</li>\n<li>D. Test completion</li></ul>\n<p>Which of the following BEST matches the tasks with the activities?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1B, 2A, 3D, 4C"
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
     "text": "1C, 2D, 3A, 4B"
    }
   ],
   "answer": "b",
   "explanation": "<p>Considering each of the listed test activities and their tasks:\nA. Test analysis - To identify the features that require testing, the\ntest basis is analyzed and defined as test conditions, which are\nthen prioritized along with related risks. During this test analysis,\ndefects in the test basis are typically uncovered, and the test\nobject's testability may also be assessed. (Task 4)\nB. Test design - Involves using test conditions to create test cases\nand other necessary testware, such as test data requirements\nand test charters for exploratory testing. (Task 1)\nC. Test implementation - Test procedures, such as manual and\nautomated test scripts, are created from test cases and may be\nassembled into test suites. Test procedures are prioritized and\narranged in a test execution schedule. (Task 3)\nD. Test completion - Occurs at project milestones, such as release,\nend of iteration or end of test level. Testware is identified and\narchived or handed to the appropriate teams for reuse, the test\nenvironment is shut down, and the test activities are analyzed for\nlessons learned and future improvements. (Task 2)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 5,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.3",
   "selectCount": 1,
   "stem": "<p>Given the following testware:</p>\n<ul style='list-style-type:none;padding-left:14px'><li>i. Test completion report</li>\n<li>ii. Data held in a database used for test inputs and expected results</li>\n<li>iii. The list of elements needed to build the test environment</li>\n<li>iv. Documented sequences of test cases in execution order</li>\n<li>v. Test cases</li></ul>\n<p>Which of the following BEST shows the testware produced as a result of performing test implementation?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "ii, iv"
    },
    {
     "letter": "b",
     "text": "iii, v"
    },
    {
     "letter": "c",
     "text": "i, ii, v"
    },
    {
     "letter": "d",
     "text": "i, iii, iv"
    }
   ],
   "answer": "a",
   "explanation": "<p>Considering each of the listed testware, and the test activity that produces\ni. The test completion report is an output of test completion\nii. Data held in a database used for inputs and expected results is\n\nthe test data - output of test implementation\niii. The list of elements needed to build the test environment is the\n\ntest environment requirements - output of test design\niv. Documented sequences of test cases in execution order are the\n\ntest procedures - output of test implementation\nv. Test cases - output of test design\n\nTest implementation produces the following outputs: test procedures (iv),\nautomated test scripts, test suites, test data (ii), test execution schedule,\nand test environment elements such as stubs, drivers, simulators, and\nservice virtualizations.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct. Items ii and iv in the list are produced as a result of test\n\nimplementation</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 6,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.5",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to describe a task performed by someone in a test management role?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Evaluate the test basis and the test object"
    },
    {
     "letter": "b",
     "text": "Define test environment requirements"
    },
    {
     "letter": "c",
     "text": "Assess testability of the test object"
    },
    {
     "letter": "d",
     "text": "Create the test completion report"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The testing role is primarily responsible for the technical\nand engineering aspects of testing, such as test analysis, test design,\ntest implementation, and test execution. Evaluating the test basis for\ndefects and the test object for testability are tasks performed as part of\ntest analysis, so it is likely they are tasks performed by the testing role</strong></p>\n<p><strong>b) Is not correct. The testing role is primarily responsible for the technical\nand engineering aspects of testing, such as test analysis, test design,\ntest implementation, and test execution. Defining the test environment\nrequirements is a task performed as part of test design, so it is likely to\nbe a task performed by the testing role</strong></p>\n<p><strong>c) Is not correct. The testing role is primarily responsible for the technical\nand engineering aspects of testing, such as test analysis, test design,\ntest implementation, and test execution. Assessing the testability of a\ntest object is a task performed as part of test analysis, so it is likely to be\na task performed by the testing role</strong></p>\n<p><strong>d) Is correct. The test management role primarily involves activities related\nto test planning, test monitoring and test control, and test completion.\nThus, creating the test completion report, which is the prime output from\nthe test completion, is likely to be a task performed by the test\nmanagement role</strong></p>"
  },
  {
   "n": 7,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.5.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is an advantage of the whole team approach?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Improved communication between team members"
    },
    {
     "letter": "b",
     "text": "Decreased individual accountability for quality"
    },
    {
     "letter": "c",
     "text": "Faster deployment of deliverables to the end users"
    },
    {
     "letter": "d",
     "text": "Reduced collaboration with external business users"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. The whole team approach promotes robust communication\nand collaboration between the team members</strong></p>\n<p><strong>b) Is not correct. While the whole team approach prioritizes collective\naccountability for quality, each individual team member is still equally\naccountable for quality</strong></p>\n<p><strong>c) Is not correct. The whole team approach is about how the team works\ntogether, with the aim of higher quality deliverables, but it does not\nnecessarily result in faster deployment to end users</strong></p>\n<p><strong>d) Is not correct. When using the whole team approach, testers work with\nbusiness representatives to create acceptance tests. There is no\nsuggestion that the approach will reduce collaboration with external\nbusiness users</strong></p>"
  },
  {
   "n": 8,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.5.3",
   "selectCount": 1,
   "stem": "<p>Given the following benefits and drawbacks of the independence of testing:</p>\n<ul style='list-style-type:none;padding-left:14px'><li>i. The testers work in a different location from the developers</li>\n<li>ii. Testers question the assumptions programmers make while writing code</li>\n<li>iii. A confrontational dynamic has been established between testers and developers</li>\n<li>iv. Developers have convinced themselves that testers are mostly accountable for quality</li>\n<li>v. Testers have different biases than those held by the developers</li></ul>\n<p>Which are MOST likely to be considered benefits?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i, iv"
    },
    {
     "letter": "b",
     "text": "ii, v"
    },
    {
     "letter": "c",
     "text": "i, iii, iv"
    },
    {
     "letter": "d",
     "text": "ii, iii, v"
    }
   ],
   "answer": "b",
   "explanation": "<p>Considering each of the listed benefits and drawbacks of the independence\ni. Ideally, we want close collaboration between testers and\ndevelopers, which is not increased by isolation. Thus, this is a\ndisadvantage\n\nii. Testers and developers have varied backgrounds, technical\nviewpoints, and potential biases, allowing testers to usefully\nchallenge assumptions made by stakeholders during system\nspecification and implementation. Thus, this is an advantage\n\niii. The main disadvantage of independence of testing is that testers\nmay become isolated from the development team, leading to\ncommunication problems, a lack of collaboration, and potentially\nan adversarial relationship, with testers being blamed for delays\nand bottlenecks in the release process. Thus, this is a\ndisadvantage\n\niv. One of the disadvantages of independence of testing is that\ntesters may become isolated from the development team, leading\nto developers feeling less accountable for quality. Thus, this is a\ndisadvantage\n\nv. The primary benefit of independence of testing is that testers are\nmore likely to identify different types of failures and defects\ncompared to developers, due to their varied backgrounds,\ntechnical viewpoints, and potential biases, including cognitive bias</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct. The list entries showing benefits are ii and v</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
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
     "text": "Each test level has specific and distinct test objectives"
    },
    {
     "letter": "b",
     "text": "Test implementation and execution for a given test level should start during the corresponding development phase"
    },
    {
     "letter": "c",
     "text": "Testers should start test design as soon as drafts of the relevant work products become available"
    },
    {
     "letter": "d",
     "text": "Every dynamic testing activity has a corresponding static testing activity"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Each test level has specific and distinct test objectives as a\ndifferent form of test object (e.g., single component and complete\nsystem) is tested at each test level and overlapping test objectives\nwould lead to unnecessary duplication</strong></p>\n<p><strong>b) Is not correct. Test analysis and test design for a given test level should\nstart during the corresponding development phase to facilitate early\ntesting (e.g., acceptance test analysis and test design should begin\nduring requirements analysis). Test implementation will generally start\nlater, and test execution will start during the test level</strong></p>\n<p><strong>c) Is not correct. Test design for a given test level should start during the\ncorresponding development phase to facilitate early testing, however\ntest design (e.g., test case generation) needs to be based on an agreed\ntest basis, not an early draft, otherwise significant test effort may be\nwasted on creating test cases for a design that later changes</strong></p>\n<p><strong>d) Is not correct. Quality control applies to all development activities,\nmeaning that every software development activity has a corresponding\ntest activity. However, the same symmetry does not apply to dynamic\ntesting and static testing. There are some static testing activities (e.g.,\nstatic analysis) for which there is no obvious corresponding dynamic\ntesting activity</strong></p>"
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
     "text": "Behavior-Driven Development"
    },
    {
     "letter": "b",
     "text": "Test Level Driven Development"
    },
    {
     "letter": "c",
     "text": "Function-Driven Development"
    },
    {
     "letter": "d",
     "text": "Performance-Driven Development"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Behavior-Driven Development (BDD) is a well-known\nexample of a test-first approach to development</strong></p>\n<p><strong>b) Is not correct. Test Level Driven Development is not a correct example\nof a test-first approach to development</strong></p>\n<p><strong>c) Is not correct. Function-Driven Development is not a correct example of\na test-first approach to development</strong></p>\n<p><strong>d) Is not correct. Performance-Driven Development is not a correct\nexample of a test-first approach to development</strong></p>"
  },
  {
   "n": 11,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.4",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to be a challenge encountered when implementing DevOps?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Making sure that non-functional quality characteristics are not overlooked"
    },
    {
     "letter": "b",
     "text": "Managing continuously changing test environments"
    },
    {
     "letter": "c",
     "text": "The need for more manual testers with suitable experience"
    },
    {
     "letter": "d",
     "text": "Setting up the test automation as part of the delivery pipeline"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. DevOps generally increases the visibility of non-functional\nquality characteristics, such as performance and reliability</strong></p>\n<p><strong>b) Is not correct. Automated processes like continuous\nintegration/continuous delivery (CI/CD) used in DevOps facilitate stable\ntest environments</strong></p>\n<p><strong>c) Is not correct. Automated processes like CI/CD used in DevOps\ngenerally reduce the need for manual testing</strong></p>\n<p><strong>d) Is correct. DevOps implementation can pose several risks and\nchallenges, including the need to define and set up the delivery pipeline,\nintroduce and maintain CI/CD tools, and establish and maintain test\nautomation</strong></p>"
  },
  {
   "n": 12,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.6",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST describes retrospectives?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach"
    },
    {
     "letter": "b",
     "text": "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future"
    },
    {
     "letter": "c",
     "text": "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment"
    },
    {
     "letter": "d",
     "text": "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. The benefits of retrospectives include team bonding and\nlearning from sharing issues, and better collaboration between\ndevelopers and testers through reviewing and improving working\npractices. Calling out individuals who a team member may feel did not\nfully contribute to achieving quality as required by the whole team\napproach will not contribute to this team bonding and collaboration</strong></p>\n<p><strong>b) Is correct. During the retrospective, the group discusses what aspects of\nthe project were successful and should be retained, as well as areas\nthat could be improved, and how to do so</strong></p>\n<p><strong>c) Is not correct. The benefits of retrospectives are based on increased\neffectiveness and efficiency through process improvements; they are\nnot an opportunity to let off steam and criticize management and\ncustomers. Also, the test results are recorded, usually in the test\ncompletion report, so anything said in the meeting could be read by\nother stakeholders</strong></p>\n<p><strong>d) Is not correct. Retrospectives are meetings that are typically held at the\nend of an iteration where team members will focus on discussing\nquality-related issues that have occurred in the current iteration. They\nare not used for making plans or technical decisions for the next\niteration; this would be done in the iteration planning meeting at the start\nof the next iteration</strong></p>"
  },
  {
   "n": 13,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.2",
   "selectCount": 1,
   "stem": "<p>Which of the following tests is MOST likely to be performed as part of functional testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The test checks that the sort function puts the elements of the list or array in ascending order"
    },
    {
     "letter": "b",
     "text": "The test checks whether the sort function completes sorting within one second of starting"
    },
    {
     "letter": "c",
     "text": "The test checks how easily the sort function can be changed from sorting ascending to sorting descending"
    },
    {
     "letter": "d",
     "text": "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Checking that the sort function puts the elements of the list or\narray in ascending order is evaluating the functional correctness of the\nsort function, which is part of functional testing</strong></p>\n<p><strong>b) Is not correct. Assessing whether the sort function meets its non-\nfunctional requirement to complete within one second is part of testing\nits performance efficiency, which is part of non-functional testing</strong></p>\n<p><strong>c) Is not correct. Evaluating the ease with which the sort function can be\nmodified from sorting ascending to sorting descending is testing its\nmodifiability, a form of non-functional maintainability testing, which is\npart of non-functional testing</strong></p>\n<p><strong>d) Is not correct. Assessing that the sort function still functions correctly\nwhen moved from a 32-bit to a 64-bit architecture is testing its\nadaptability, a form of portability testing, which is part of non-functional\ntesting</strong></p>"
  },
  {
   "n": 14,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.3.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true"
    },
    {
     "letter": "b",
     "text": "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers"
    },
    {
     "letter": "c",
     "text": "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system"
    },
    {
     "letter": "d",
     "text": "The language support option of the currency exchange system was used to enable both English and local language currency transactions"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Assuming that testers could check the ease of changing\nthe currency exchange system then it would be done by maintainability\ntesting rather than maintenance testing, so this is not a trigger for\nmaintenance testing</strong></p>\n<p><strong>b) Is correct. A system modification (such as a fix or enhancement) is an\nexample of a trigger for maintenance testing. The removal of the refund\noption of the currency exchange system was a fix that would lead to\nmaintenance testing</strong></p>\n<p><strong>c) Is not correct. If the agile team has started developing a user story that\nadds a new customer loyalty feature to the currency exchange system,\nthen this will result in them testing the new feature, and then they would\nperform regression testing. No maintenance testing is required in this\nsituation</strong></p>\n<p><strong>d) Is not correct. Reconfiguration of the currency exchange system to\nsupport both the local language and English currency transactions is not\na system modification, a change to the operational environment, or a\nsystem retirement, which are the three triggers for maintenance testing</strong></p>"
  },
  {
   "n": 15,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following CANNOT be examined by static testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Contract"
    },
    {
     "letter": "b",
     "text": "Test plan"
    },
    {
     "letter": "c",
     "text": "Encrypted code"
    },
    {
     "letter": "d",
     "text": "Test charter"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Most work products can be examined using some form of\nstatic testing, and a contract must be interpretable by humans and so\ncould be reviewed, which is a form of static testing</strong></p>\n<p><strong>b) Is not correct. Most work products can be examined using some form of\nstatic testing, and a test plan must be interpretable by humans and so\ncould be reviewed, which is a form of static testing</strong></p>\n<p><strong>c) Is correct. Most work products can be examined using some form of\nstatic testing; however it is not suitable for work products that are too\ncomplex for human interpretation and should not be analyzed by tools,\nand encrypted code is too complex for humans and if it is properly\nencrypted it will not be analyzable by most tools</strong></p>\n<p><strong>d) Is not correct. Most work products can be examined using some form of\nstatic testing, and a test charter must be interpretable by humans and\nso could be reviewed, which is a form of static testing</strong></p>"
  },
  {
   "n": 16,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.1.2",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about the value of static testing is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The defect types found by static testing are different from the defect types that can be found by dynamic testing"
    },
    {
     "letter": "b",
     "text": "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types"
    },
    {
     "letter": "c",
     "text": "Dynamic testing can identify some of the defects that can be found by static testing but not all of them"
    },
    {
     "letter": "d",
     "text": "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
    }
   ],
   "answer": "c",
   "explanation": "<p>Some defect types that can only be detected by static testing, such as\nunreachable code, design patterns not implemented as desired and defects\nin non-executable work products. Some defect types that can be found by\nboth static testing and dynamic testing, such as a programming defect that\ncan be observed by a reviewer in a code review and which causes an\nobservable failure during dynamic testing. And some defect types that can\nonly be detected by dynamic testing, such as performance issues or\nmemory issues that can only be observed when executing the code or\nsystem.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 17,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.2.2",
   "selectCount": 1,
   "stem": "<p>Given the following descriptions of review activities:</p>\n<ol><li>Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed</li>\n<li>Defects are recorded, and any needed updates are addressed prior to the acceptance of the work product</li>\n<li>Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies</li>\n<li>The objective of the review and its schedule are established to ensure a focused and efficient review</li>\n<li>Participants are provided with access to the item being reviewed</li></ol>\n<p>Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "4 &#8211; 3 &#8211; 5 &#8211; 2 &#8211; 1"
    },
    {
     "letter": "b",
     "text": "4 &#8211; 5 &#8211; 3 &#8211; 1 &#8211; 2"
    },
    {
     "letter": "c",
     "text": "5 &#8211; 4 &#8211; 1 &#8211; 3 &#8211; 2"
    },
    {
     "letter": "d",
     "text": "5 &#8211; 4 &#8211; 3 &#8211; 2 &#8211; 1"
    }
   ],
   "answer": "b",
   "explanation": "<p>The five listed descriptions and the corresponding review process activities\n1. This describes part of the `communication and analysis' activity\n2. This describes part of the `fixing and reporting' activity\n3. This describes part of the `individual review' activity\n4. This describes part of the `planning' activity\n5. This describes part of the `review initiation' activity\n\nThe generic review process from ISO/IEC 20246, which is outlined in the\nsyllabus, comprises the following activities in this logical order:</p>\n<ul><li>Planning (4)</li><li>Review initiation (5)</li><li>Individual review (3)</li><li>Communication and analysis (1)</li><li>Fixing and reporting (2)</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct. The correct sequence of activities is: 4 &#8211; 5 &#8211; 3 &#8211; 1 &#8211; 2</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 18,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.3",
   "selectCount": 1,
   "stem": "<p>Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Manager"
    },
    {
     "letter": "b",
     "text": "Moderator"
    },
    {
     "letter": "c",
     "text": "Chairperson"
    },
    {
     "letter": "d",
     "text": "Review Leader"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. The manager is responsible for deciding what needs to\nbe reviewed and allocating resources, such as staff and time, for the\nreview</strong></p>\n<p><strong>b) Is correct. The moderator (or facilitator) is responsible for ensuring that\nthe review meetings run effectively, including managing time, mediating\ndiscussions, and creating a safe environment where everyone can voice\ntheir opinions freely</strong></p>\n<p><strong>c) Is not correct. The chairperson is not a recognized role in reviews</strong></p>\n<p><strong>d) Is not correct. The review leader is responsible for overseeing the</strong></p>"
  },
  {
   "n": 19,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.1.1",
   "selectCount": 1,
   "stem": "<p>You perform system testing of an e-commerce web application and are provided with the following requirement:</p>\n<p>REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount.</p>\n<p>Which test techniques will be MOST helpful in designing test cases based on this requirement?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "White-box test techniques"
    },
    {
     "letter": "b",
     "text": "Black-box test techniques"
    },
    {
     "letter": "c",
     "text": "Experience-based test techniques"
    },
    {
     "letter": "d",
     "text": "Risk-based test techniques"
    }
   ],
   "answer": "b",
   "explanation": "<p>review process, such as selecting the review team members,\nscheduling review meetings, and ensuring that the review is completed\nsuccessfully</p>\n<p><strong>a) Is not correct. The document does not refer to the test object's internal\nstructure but specifies the desired behavior of the test object. Therefore,\nwhite-box test techniques will not be helpful in designing test cases</strong></p>\n<p><strong>b) Is correct. The document is a requirement that specifies the desired\nbehavior of the test object. Therefore, the most suitable test techniques\nin this case are the black-box test techniques (e.g., Boundary Value\nAnalysis or Decision Table Testing)</strong></p>\n<p><strong>c) Is not correct. Although experience-based test techniques can be used\nto design test cases based on this document, black-box test techniques\nwill be more suitable. The document describes a precise business rule\nand, in addition, wording like \"exceeds $100\" suggests the existence of\nimportant equivalence partition boundaries that should be tested using\nblack-box test techniques like Boundary Value Analysis</strong></p>\n<p><strong>d) Is not correct. Risk-based test techniques are not a recognized type of\ntest technique</strong></p>"
  },
  {
   "n": 20,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.1",
   "selectCount": 2,
   "stem": "<p>The system for selling cinema tickets calculates the discount type based on the client's birth year (BY) and on the current year (CY) as follows:</p>\n<p>Let D be the difference between CY and BY, that is, D = CY &#8211; BY</p>\n<ul><li>If D &lt; 0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; then print the error message \"birth year cannot be greater than current year\"</li>\n<li>If 0 &le; D &lt; 18 &nbsp; then apply the student discount</li>\n<li>If 18 &le; D &lt; 65 &nbsp; then apply no discount</li>\n<li>If D &ge; 65 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; then apply the pensioner discount</li></ul>\n<p>Your test suite already contains two test cases:</p>\n<ul><li>BY = 1990, CY = 2020, expected result: no discount</li>\n<li>BY = 2030, CY = 2029, expected result: print the error message</li></ul>\n<p>Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "BY = 2001, CY = 2065"
    },
    {
     "letter": "b",
     "text": "BY = 1900, CY = 1965"
    },
    {
     "letter": "c",
     "text": "BY = 1965, CY = 1900"
    },
    {
     "letter": "d",
     "text": "BY = 2011, CY = 2029"
    },
    {
     "letter": "e",
     "text": "BY = 2000, CY = 2000"
    }
   ],
   "answer": [
    "b",
    "e"
   ],
   "explanation": "<p>There are two equivalence partitions that are not yet covered, which\ncorrespond to \"student discount\" and \"pensioner discount\".</p>\n<p><strong>a) Is not correct. CY – BY = 64, so these inputs correspond to the already\ncovered \"no discount\" partition</strong></p>\n<p><strong>b) Is correct. CY – BY = 65, so these inputs correspond to a partition that\n\nis not yet covered (\"pensioner discount\")</strong></p>\n<p><strong>c) Is not correct. CY – BY = –65, so these inputs correspond to the already\n\ncovered \"error message\" partition</strong></p>\n<p><strong>d) Is not correct. CY – BY = 18, so these inputs correspond to the already\n\ncovered \"no discount\" partition</strong></p>\n<p><strong>e) Is correct. CY – BY = 0, so these inputs correspond to a partition that is\nnot yet covered (\"student discount\")</strong></p>"
  },
  {
   "n": 21,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.2",
   "selectCount": 1,
   "stem": "<p>You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message \"temperature OK\". For lower temperatures, the system displays the message \"temperature too low\" and for higher temperatures it displays the message \"temperature too high\".</p>\n<p>Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "–1, 3"
    },
    {
     "letter": "b",
     "text": "0, 2"
    },
    {
     "letter": "c",
     "text": "–1, 0, 2, 3"
    },
    {
     "letter": "d",
     "text": "–2, 0, 2, 4"
    }
   ],
   "answer": "c",
   "explanation": "<p>not yet covered (\"student discount\")\nThere are three equivalence partitions: {..., –2, –1}, {0, 1, 2}, {3, 4, ...}.\nFor 2-value BVA all the boundary values for all the equivalence partitions\nmust be covered.\nThe boundary values are –1 (for the \"temperature too low\" partition), 0, 2\n(for the \"temperature OK\" partition) and 3 (for the \"temperature too high\"\npartition).</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct. The correct option is: –1, 0, 2, 3</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 22,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.3",
   "selectCount": 1,
   "stem": "<p>You are designing test cases based on the following decision table.</p>\n<p>So far you have designed the following test cases:</p>\n<ul><li>TC1: 19-year-old, unregistered man with no experience; expected result: category A</li>\n<li>TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B</li>\n<li>TC3: 66-year-old, registered man with no experience; expected result: category C</li>\n<li>TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D</li></ul>\n<p>Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th></tr></thead>\n<tbody>\n<tr><td>C1: Age</td><td>0–18</td><td>19–65</td><td>19–65</td><td>&gt;65</td><td>0–18</td><td>19–65</td><td>&gt;65</td></tr>\n<tr><td>C2: Experience</td><td>–</td><td>0–4</td><td>&gt;4</td><td>–</td><td>–</td><td>–</td><td>–</td></tr>\n<tr><td>C3: Registered?</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>YES</td><td>YES</td><td>YES</td></tr>\n<tr><td><strong>Category</strong></td><td><strong>A</strong></td><td><strong>A</strong></td><td><strong>B</strong></td><td><strong>B</strong></td><td><strong>B</strong></td><td><strong>D</strong></td><td><strong>C</strong></td></tr>\n</tbody></table></div>",
   "options": [
    {
     "letter": "a",
     "text": "66-year-old, unregistered man with no experience; expected result: category B"
    },
    {
     "letter": "b",
     "text": "55-year-old, unregistered woman with 2 years of experience; expected result: category A"
    },
    {
     "letter": "c",
     "text": "19-year-old, registered woman with 5 years of experience; expected result: category D"
    },
    {
     "letter": "d",
     "text": "No additional test case can increase the already achieved decision table coverage"
    }
   ],
   "answer": "a",
   "explanation": "<p>Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7\nand R6 in the decision table.</p>\n<p><strong>a) Is correct. The conditions \"66-year-old\", \"unregistered\" and \"no\n\nexperience\" match rule R4, which is not covered by the existing test\ncases, so after adding this test case, the decision table coverage will\nincrease</strong></p>\n<p><strong>b) Is not correct. The conditions \"55-year-old\", \"unregistered\" and \"2 years\nof experience\" match rule R2, already covered by TC1. So adding this\ntest case will not increase the coverage</strong></p>\n<p><strong>c) Is not correct. The conditions \"19-year-old\", \"registered\" and \"5 years of\nexperience\" match rule R6, already covered by TC4. So adding this test\ncase will not increase the coverage</strong></p>\n<p><strong>d) Is not correct. The existing test cases cover only 4 out of 7 columns of\nthe decision table. The coverage can be increased by adding test cases\nthat cover yet uncovered columns, that is, R1, R4 and R5</strong></p>"
  },
  {
   "n": 23,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.4",
   "selectCount": 1,
   "stem": "<p>You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events:</p>\n<p>Assuming all test cases start in the 'Requesting' state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th>State</th><th>Available</th><th>NotAvailable</th><th>ChangeRoom</th><th>Cancel</th><th>Pay</th></tr></thead>\n<tbody>\n<tr><td>S1: Requesting</td><td>S2</td><td>S3</td><td></td><td></td><td></td></tr>\n<tr><td>S2: Confirmed</td><td></td><td></td><td>S1</td><td>S4</td><td>S4</td></tr>\n<tr><td>S3: Waiting list</td><td>S2</td><td></td><td></td><td>S4</td><td></td></tr>\n<tr><td>S4: End</td><td></td><td></td><td></td><td></td><td></td></tr>\n</tbody></table></div>",
   "options": [
    {
     "letter": "a",
     "text": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel"
    },
    {
     "letter": "b",
     "text": "Available, ChangeRoom, NotAvailable, Available, Pay"
    },
    {
     "letter": "c",
     "text": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable"
    },
    {
     "letter": "d",
     "text": "NotAvailable, Cancel, ChangeRoom, Available, Pay"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. This sequence of five events covers 4 different valid\ntransitions (both \"NotAvailable\" events correspond to the same\ntransition between S1 and S3). This test case covers 4 out of 7 valid\ntransitions</strong></p>\n<p><strong>b) Is correct. This sequence of five events covers 5 different transitions\n(the first \"Available\" event corresponds to a transition between S1 and\nS2, and the second \"Available\" event corresponds to a transition\nbetween S3 and S2, so two different transitions are covered). This test\ncase covers 5 out of 7 valid transitions and achieves the highest valid\ntransitions coverage</strong></p>\n<p><strong>c) Is not correct. This sequence of five events covers 3 different transitions\n(both \"Available\" events correspond to the same transition from S1 to\nS2; both \"ChangeRoom\" events correspond to the same transition from\nS2 to S1). This test case covers 3 out of 7 valid transitions</strong></p>\n<p><strong>d) Is not correct. This sequence of five events does not represent a\nfeasible test case, because after \"Cancel\" the system ends up in the\nEnd state and no further valid transitions can be executed</strong></p>"
  },
  {
   "n": 24,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.1",
   "selectCount": 1,
   "stem": "<p>Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage.</p>\n<p>Which of the following statements is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Executing S will cause all possible failures in P"
    },
    {
     "letter": "b",
     "text": "S achieves 100% branch coverage for P"
    },
    {
     "letter": "c",
     "text": "Every executable statement in P containing a defect has been run at least once during the execution of S"
    },
    {
     "letter": "d",
     "text": "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. A statement with a defect, when executed, does not have\nto cause a failure. For example, a statement x := y / z will cause a failure\nonly when z equals 0</strong></p>\n<p><strong>b) Is not correct. 100% statement coverage does not guarantee 100%\nbranch coverage. For example, a test case with x=0 for the code\n1. IF (x=0) THEN\n2. A;\n3. ENDIF\nachieves 100% statement coverage but does not cover the branch from\n1 to 3</strong></p>\n<p><strong>c) Is correct. 100% statement coverage means that each executable\nstatement was executed at least once</strong></p>\n<p><strong>d) Is not correct. The removed test case may provide coverage of some\nstatements that are not covered by either of the other two test cases, in\nwhich case the remaining two test cases together will not achieve 100%\nstatement coverage</strong></p>"
  },
  {
   "n": 25,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.3",
   "selectCount": 1,
   "stem": "<p>Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test cases are designed based on the structure of the test object rather than the specification"
    },
    {
     "letter": "b",
     "text": "For each white-box test technique the coverage can be well-defined and easily measured"
    },
    {
     "letter": "c",
     "text": "White-box test techniques are very well designed to detect omissions in the requirements"
    },
    {
     "letter": "d",
     "text": "White-box test techniques can be used in both static testing and dynamic testing"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. A fundamental strength that all white-box test techniques\nshare is that the entire software implementation is taken into account\nduring testing, which facilitates defect detection even when the software\nspecification is vague, outdated or incomplete. This means white-box\ntesting can find defects such as an extra feature added to the code\n(either accidentally or deliberately) that is not supposed to be there,\nwhich black-box testing cannot detect</strong></p>\n<p><strong>b) Is not correct. The fact that the coverage can be precisely defined is not\nthe right reason. The achieved level of coverage would have much more\nimpact than the possibility to measure the coverage</strong></p>\n<p><strong>c) Is not correct. If the software does not implement one or more\nrequirements, white-box testing is unlikely to detect the resulting defects\nof omission</strong></p>\n<p><strong>d) Is not correct. While this is true, this is not the right answer, because\nthere is no connection between the capability to be used in both static\ntesting and dynamic testing and the claim that white-box testing\nfacilitates defect detection with poor specifications</strong></p>"
  },
  {
   "n": 26,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT anticipated by the tester while applying error guessing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The developer misunderstood the formula in the user story for calculating the interest"
    },
    {
     "letter": "b",
     "text": "The developer wrote \"FA = A*(1+IR^N)\" instead of \"FA = A*(1+IR)^N\" in the source code"
    },
    {
     "letter": "c",
     "text": "The developer missed the seminar on new compound interest rate legislation"
    },
    {
     "letter": "d",
     "text": "The accuracy of the interest calculated by the system is not precise enough"
    }
   ],
   "answer": "c",
   "explanation": "<p>Error guessing is about anticipating the errors, defects and failures based\non the tester's knowledge.</p>\n<p><strong>a) Is not correct. This is an example of anticipating the developer's error</strong></p>\n<p><strong>b) Is not correct. This is an example of anticipating the defect</strong></p>\n<p><strong>c) Is correct. This is an example of a potential root cause of a defect,\n\nwhich is neither an error, defect nor failure, and difficult for the tester to\nanticipate</strong></p>\n<p><strong>d) Is not correct. This is an example of anticipating a failure, perhaps\nbased on experience of previous systems in this application domain</strong></p>"
  },
  {
   "n": 27,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is true about exploratory testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test cases are designed before the exploratory testing session starts"
    },
    {
     "letter": "b",
     "text": "The tester can perform test execution, but cannot perform test design"
    },
    {
     "letter": "c",
     "text": "Exploratory testing results are good predictors of the number of remaining defects"
    },
    {
     "letter": "d",
     "text": "During exploratory testing the tester may use black-box test techniques"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. In exploratory testing, test cases are usually created\nduring the exploratory testing session, alongside test analysis, test\nimplementation and test execution</strong></p>\n<p><strong>b) Is not correct. In exploratory testing, tests are simultaneously designed,\nexecuted, and evaluated while the tester learns about the test object</strong></p>\n<p><strong>c) Is not correct. Exploratory test results depend heavily on the tester's\nexperience. So, even if the test results of exploratory testing can be\nused as a predictor of risk and used to assess whether there will be\nfewer or more defects, compared to the previous exploratory testing\nsession, they are not a good example of reliable defect prediction\nmodels that can predict the number of remaining defects</strong></p>\n<p><strong>d) Is correct. During exploratory testing, the testers can use any test\ntechniques that they find useful</strong></p>"
  },
  {
   "n": 28,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.5.1",
   "selectCount": 1,
   "stem": "<p>Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story"
    },
    {
     "letter": "b",
     "text": "Reviews, so that a team can detect inconsistencies and contradictions in a user story"
    },
    {
     "letter": "c",
     "text": "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation"
    },
    {
     "letter": "d",
     "text": "Conversation, so that team members can understand how the software will be used"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Planning poker can estimate effort for a user story that is\nalready written. It does not help in understanding what should be\ndelivered</strong></p>\n<p><strong>b) Is not correct. Reviews are not a collaborative user story writing practice</strong></p>\n<p><strong>c) Is not correct. Iteration planning is a project-related practice, used to\n\nplan the work, not to understand what needs to be delivered</strong></p>\n<p><strong>d) Is correct. Conversation explains how the software will be used and</strong></p>"
  },
  {
   "n": 29,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.5.3",
   "selectCount": 1,
   "stem": "<p>You have just started designing test cases for the following user story.</p>\n<p>As a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily. Acceptance criteria:</p>\n<p>1. The filter should work for all versions of the application from version 3.0 upwards</p>\n<p>2. The filter should allow the customer to set a price range with a minimum and a maximum price</p>\n<p>3. The search results should update dynamically as the customer adjusts the price range filter</p>\n<p>In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110.</p>\n<p>Which of the following is the BEST example of a test case for this user story?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B"
    },
    {
     "letter": "b",
     "text": "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client's webpage. Expected result: the default maximum price changes to $120"
    },
    {
     "letter": "c",
     "text": "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate"
    },
    {
     "letter": "d",
     "text": "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
    }
   ],
   "answer": "a",
   "explanation": "<p>often allows the team to define meaningful acceptance criteria, thus\nobtaining a shared vision of what should be delivered</p>\n<p><strong>a) Is correct. This test case is related to acceptance criteria 2 and 3,\nbecause we check if we can set price range (acceptance criterion 2)\nand if the results update dynamically after adjusting the price range filter\n(acceptance criterion 3)</strong></p>\n<p><strong>b) Is not correct. This test case is not related to any of the acceptance\ncriteria. It checks if the filter dynamically sets the default minimum and\nmaximum price range, and not that a customer can do it</strong></p>\n<p><strong>c) Is not correct. This test case is not related to any of the acceptance\ncriteria. It checks the currency exchange feature, which is not discussed\nin this user story</strong></p>\n<p><strong>d) Is not correct. This test case is not related to any of the acceptance\ncriteria. It checks the application's compatibility with different browsers,\nwhich is not discussed in this user story</strong></p>"
  },
  {
   "n": 30,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.3",
   "selectCount": 2,
   "stem": "<p>Which of the following BEST define EXIT criteria in a testing project?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Budget is approved"
    },
    {
     "letter": "b",
     "text": "Budget runs out"
    },
    {
     "letter": "c",
     "text": "Test basis is available"
    },
    {
     "letter": "d",
     "text": "Test cases achieved at least 80% statement coverage"
    },
    {
     "letter": "e",
     "text": "All test analysts are ISTQB certified at the Foundation Level"
    }
   ],
   "answer": [
    "b",
    "d"
   ],
   "explanation": "<p><strong>a) Is not correct. The approval of the budget is an example of an entry\ncriterion. It would make no sense to approve the budget for some\nactivity that has already been done</strong></p>\n<p><strong>b) Is correct. Running out of budget can be viewed as a valid exit criterion</strong></p>\n<p><strong>c) Is not correct. Availability of resources is an example of an entry\n\ncriterion for testing</strong></p>\n<p><strong>d) Correct. Coverage is a measure of thoroughness, so it is a typical exit\n\ncriterion</strong></p>\n<p><strong>e) Is not correct. This is an example of an entry criterion, checked before</strong></p>"
  },
  {
   "n": 31,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.4",
   "selectCount": 1,
   "stem": "<p>The team wants to estimate the time needed for one tester to execute four test cases for a</p>\n<p>software component. The team has gathered the following measures of the effort used to execute</p>\n<p>a single test case:</p>\n<ul><li>Best-case scenario: 1 hour</li></ul>\n<ul><li>Worst-case scenario: 8 hours</li></ul>\n<ul><li>Most likely scenario: 3 hours</li></ul>\n<p>Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "14 hours"
    },
    {
     "letter": "b",
     "text": "3.5 hours"
    },
    {
     "letter": "c",
     "text": "16 hours"
    },
    {
     "letter": "d",
     "text": "12 hours"
    }
   ],
   "answer": "a",
   "explanation": "<p>the project starts\n\n\n\nUsing the three-point estimation technique, the final estimate (E) is\ncalculated as:\nE = (a + 4*m + b) / 6,\nwhere a is the most optimistic estimate, m is the most likely estimate, and b\nis the most pessimistic estimate.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct. In this case, the estimate for executing a single test case is:\n\nE = (1h + 4*3h + 8h) / 6 = 3.5 hours\n\nSo, the total time needed for the tester to execute 4 test cases is:\n\n3.5h * 4 = 14 hours</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 32,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.5",
   "selectCount": 1,
   "stem": "<p>The table shows the traceability matrix from test cases to requirements. \"X\" means that a given test case covers the corresponding requirement.</p>\n<p>You want to prioritize the test cases following the additional coverage prioritization technique.</p>\n<p>You execute all four test cases.</p>\n<p>Which test case should be executed as the LAST one?</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th></th><th>Req1</th><th>Req2</th><th>Req3</th><th>Req4</th><th>Req5</th><th>Req6</th><th>Req7</th></tr></thead>\n<tbody>\n<tr><td><strong>TC1</strong></td><td>X</td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td></tr>\n<tr><td><strong>TC2</strong></td><td>X</td><td></td><td></td><td></td><td>X</td><td></td><td>X</td></tr>\n<tr><td><strong>TC3</strong></td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td></tr>\n<tr><td><strong>TC4</strong></td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr>\n</tbody></table></div>",
   "options": [
    {
     "letter": "a",
     "text": "TC1"
    },
    {
     "letter": "b",
     "text": "TC2"
    },
    {
     "letter": "c",
     "text": "TC3"
    },
    {
     "letter": "d",
     "text": "TC4"
    }
   ],
   "answer": "b",
   "explanation": "<p>TC1 achieves the highest coverage (4/7 – Req1, Req3, Req4 and Req7), so\n\nshould be executed first.\n\nReq2, Req5 and Req6 are still not covered.\n\nThe next test case that achieves the highest additional coverage of the\n\nremaining requirements is TC3, covering 2 out of these 3 requirements\n\n(Req5 and Req6). So, TC3 should be executed as the second one.\n\nNow the only requirement still not covered is Req2, which is covered by\n\nTC4. Therefore, TC4 should be executed as the third test case.\n\nSo, the last test case executed will be TC2.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 33,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.7",
   "selectCount": 1,
   "stem": "<p>How can the testing quadrants be beneficial for testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing"
    },
    {
     "letter": "b",
     "text": "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)"
    },
    {
     "letter": "c",
     "text": "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others"
    },
    {
     "letter": "d",
     "text": "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Testing quadrants have nothing to do with describing the\nrelationships between test levels</strong></p>\n<p><strong>b) Is not correct. Testing quadrants cannot help in assessing any type of\ncoverage</strong></p>\n<p><strong>c) Is correct. Testing quadrants allow managers and other stakeholders to\nunderstand the relationships between test types, the activities they\nsupport (team support or product critique), and the viewpoint they are\nfocused on (business- or technology-facing)</strong></p>\n<p><strong>d) Is not correct. Testing quadrants is not a psychological model\nRisk assessment can use a quantitative or qualitative approach, or a mix of\nthem. In the quantitative approach the risk level is calculated as the\nmultiplication of risk likelihood and risk impact. So, Risk level = Risk\nlikelihood * Risk impact\nThen, Risk impact = Risk level / Risk likelihood.\nIn our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000.</strong></p>"
  },
  {
   "n": 34,
   "points": 1,
   "k": "K1",
   "lo": "FL-5.2.1",
   "selectCount": 1,
   "stem": "<p>For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.</p>\n<p>What is the risk impact?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "$500"
    },
    {
     "letter": "b",
     "text": "$2,000"
    },
    {
     "letter": "c",
     "text": "$50,000"
    },
    {
     "letter": "d",
     "text": "$200"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 35,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.2.2",
   "selectCount": 2,
   "stem": "<p>Which of the following are product risks?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Scope creep"
    },
    {
     "letter": "b",
     "text": "Poor architecture"
    },
    {
     "letter": "c",
     "text": "Cost-cutting"
    },
    {
     "letter": "d",
     "text": "Poor tool support"
    },
    {
     "letter": "e",
     "text": "Too long response time"
    }
   ],
   "answer": [
    "b",
    "e"
   ],
   "explanation": "<p><strong>a) Is not correct. Scope creep is an example of a project risk related to\ntechnical issues</strong></p>\n<p><strong>b) Is correct. Poor architecture is an example of a product risk since it\nrefers to a product characteristic</strong></p>\n<p><strong>c) Is not correct. Cost-cutting is an example of a project risk, related to\norganizational issues</strong></p>\n<p><strong>d) Is not correct. Poor tool support is an example of a project risk related to\ntechnical issues</strong></p>\n<p><strong>e) Is correct. Response time that is too long is an example of a product risk\nsince it refers to a product characteristic</strong></p>"
  },
  {
   "n": 36,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.3.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT a valid purpose for a test report?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Tracking test progress and identifying areas that require further attention"
    },
    {
     "letter": "b",
     "text": "Providing information on the tests executed, their results, and defects found"
    },
    {
     "letter": "c",
     "text": "Providing information about each defect, such as the steps to reproduce it"
    },
    {
     "letter": "d",
     "text": "Providing information on testing planned for the next period"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Tracking test progress and identifying areas that require\nfurther attention is an example of supporting the ongoing control of\ntesting. This is one of the purposes of test reports</strong></p>\n<p><strong>b) Is not correct. Providing information on the tests executed, their test\nresults, and any defects found is an example of summarizing the test\nactivities performed at a given test level. This is one of the purposes of\ntest reports</strong></p>\n<p><strong>c) Is correct. Providing information about defects is the purpose of a defect\nreport, not a test report</strong></p>\n<p><strong>d) Is not correct. Providing information on testing planned for the next\nperiod is one of the purposes of test reports</strong></p>"
  },
  {
   "n": 37,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.4.1",
   "selectCount": 1,
   "stem": "<p>The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it.</p>\n<p>Which of the following enabled the above activity to be performed by the team?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Risk management"
    },
    {
     "letter": "b",
     "text": "Test monitoring and control"
    },
    {
     "letter": "c",
     "text": "Whole team approach"
    },
    {
     "letter": "d",
     "text": "Configuration management"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Risk management consists of risk analysis and risk\ncontrol. Neither of these activities supports the reassembly of the files\nthat made up the release, because these activities deal with risks, not\nwith configuration items</strong></p>\n<p><strong>b) Is not correct. Test monitoring is concerned with gathering information\nabout testing. This information is used to assess test progress and to\nmeasure whether the exit criteria or the test tasks associated with the\nexit criteria are satisfied, such as meeting the targets for coverage of\nproduct risks, requirements, or other acceptance criteria. Test control\nuses the information from test monitoring to provide, in the form of\ncontrol directives, guidance and the necessary corrective actions to\nachieve the most effective and efficient testing. None of these activities\ndeal with the management of configuration items</strong></p>\n<p><strong>c) Is not correct. The whole team approach builds on the tester's skill to\nwork effectively in a team context and to contribute positively to the\nteam goals. So, it focuses on team-related issues, not on configuration\nitems</strong></p>\n<p><strong>d) Is correct. Configuration management provides a discipline for\nidentifying, controlling, and tracking work products. Configuration\nmanagement keeps a record of changed configuration items when a\nnew baseline is created. Using configuration management, it is possible\nto revert to a previous baseline in order to reproduce previous test\nresults</strong></p>"
  },
  {
   "n": 38,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.5.1",
   "selectCount": 1,
   "stem": "<p>Consider the following defect report for a Book Lending System.</p>",
   "exhibit": "<div class=\"exhibit\"><table><tr><td style=\"text-align:left;line-height:1.7;padding:12px 18px\"><strong>Defect ID:</strong> 001 &nbsp;|&nbsp; <strong>Title:</strong> Unable to Return a Book &nbsp;|&nbsp;<br><strong>Severity:</strong> High &nbsp;|&nbsp; <strong>Priority:</strong> &nbsp;|&nbsp;<br><strong>Environment:</strong> Windows 10, Google Chrome<br><strong>Description:</strong> When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user.<br><strong>Steps to Reproduce:</strong><br>&nbsp;Login to the Book Lending System as a user who has checked out a book.<br>&nbsp;Click on the \"Book Return\" button for the book that has been checked out.<br>&nbsp;System does not register the return and the book remains checked out.<br><strong>Expected Result:</strong> The book should be returned and no longer appear as checked out to the user.<br><strong>Actual Result:</strong> The book remains checked out to the user and is not registered as returned in the system.<br><strong>Attachments:</strong> [empty list]</td></tr></table></div><p>Which of the following is MOST likely to help the developer reproduce the failure quickly?</p>",
   "options": [
    {
     "letter": "a",
     "text": "Adding information about which users and which books the failure affects to the \"Description\" section"
    },
    {
     "letter": "b",
     "text": "Filling in the missing value for the \"Priority\" field"
    },
    {
     "letter": "c",
     "text": "Adding memory dumps and database snapshots taken after each step described in the \"Steps to Reproduce\" section to the \"Attachments\" section."
    },
    {
     "letter": "d",
     "text": "Repeating the same test case for different environments and writing defect reports for each of them separately"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Adding this information allows the developer to use the same\ninput data, so it is more likely they will be able to reproduce the failure\nquickly and so identify the defect faster</strong></p>\n<p><strong>b) Is not correct. Adding the value of Priority will not help in reproducing\nthe defect itself</strong></p>\n<p><strong>c) Is not correct. Although some of this information may be of value,\nadding the memory dumps and database snapshots after each step will\nbe too much, because most of these artefacts will contain useless\ninformation for the developer, and make the defect report less readable.\nIt will also require the developer to spend a lot of time analyzing this\ninformation, which will lengthen the repair process</strong></p>\n<p><strong>d) Is not correct. The question was about helping the developer to\nreproduce the failure for a specific environment configuration</strong></p>"
  },
  {
   "n": 39,
   "points": 1,
   "k": "K2",
   "lo": "FL-6.1.1",
   "selectCount": 1,
   "stem": "<p>Given the following test tool categories:</p>\n<ul style='list-style-type:none;padding-left:14px'><li>i. Collaboration tools</li>\n<li>ii. DevOps tools</li>\n<li>iii. Management tools</li>\n<li>iv. Non-functional testing tools</li>\n<li>v. Test design and implementation tools</li></ul>\n<p>Tools from which of the categories are MOST likely to facilitate test execution?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i, v"
    },
    {
     "letter": "b",
     "text": "ii, iv"
    },
    {
     "letter": "c",
     "text": "i, iii, v"
    },
    {
     "letter": "d",
     "text": "ii, iii, iv"
    }
   ],
   "answer": "b",
   "explanation": "<p>Considering each of the listed tool categories:\ni. Collaboration tools – facilitate communication. Communication\ndoes not include the facilitation of test execution\nii. DevOps tools - support the DevOps delivery pipeline, workflow\ntracking, automated build process(es) and CI/CD. The delivery\npipeline and CI/CD both include the facilitation of test execution,\nsuch as component testing for CI\niii. Management tools – increase the test process efficiency by\nfacilitating management of the SDLC, requirements, tests, defects\nand configuration. The management of these items does not\ninclude the facilitation of test execution\niv. Non-functional testing tools – allow the tester to perform non-\nfunctional testing that is difficult or impossible to perform\nmanually. Non-functional testing can include both static testing\nand dynamic testing, including test execution\nv. Test design and implementation tools – facilitate generation of\ntest cases, test data and test procedures. The generation of this\ntestware does not include the facilitation of test execution</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv)\n\nfacilitate test execution</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 40,
   "points": 1,
   "k": "K1",
   "lo": "FL-6.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is MOST likely to be a risk of test automation?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The detection of additional high-severity defects"
    },
    {
     "letter": "b",
     "text": "Providing measures that are too complicated for humans to derive"
    },
    {
     "letter": "c",
     "text": "Incompatibility with the development platform"
    },
    {
     "letter": "d",
     "text": "Substantially reduced test execution times"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. The detection of additional high-severity defects would be\na benefit of test automation, rather than a risk</strong></p>\n<p><strong>b) Is not correct. The provision of measures that are too complicated for\nhumans to derive themselves is normally considered to be a benefit of\ntest automation</strong></p>\n<p><strong>c) Is correct. If the test automation is incompatible with the development\nplatform, then it will not be able to integrate them, and, for instance,\npass test inputs to the test object and receive test results from the test\nobject</strong></p>\n<p><strong>d) Is not correct. Substantially reduced test execution times would normally\nbe considered a benefit that is provided by test automation</strong></p>"
  }
 ],
 "extras": []
};
