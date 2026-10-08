// ISTQB CTFL v4.0 Sample Exam A — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.A = {
 "id": "A",
 "title": "ISTQB CTFL 4.0 — Sample Exam A",
 "questions": [
  {
   "n": 1,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following statements describe a valid test objective?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "To prove that there are no unfixed defects in the system under test"
    },
    {
     "letter": "b",
     "text": "To prove that there will be no failures after the implementation of the system into production"
    },
    {
     "letter": "c",
     "text": "To reduce the risk level of the test object and to build confidence in the quality level"
    },
    {
     "letter": "d",
     "text": "To verify that there are no untested combinations of inputs"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. It is impossible to prove that there are no defects\nanymore in the system under test. See testing principle 1</strong></p>\n<p><strong>b) Is not correct. See testing principle 7</strong></p>\n<p><strong>c) Is correct. Testing finds defects and failures which reduces the level of\n\nrisk and at the same time gives more confidence in the quality level of\nthe test object</strong></p>\n<p><strong>d) Is not correct. It is impossible to test all combinations of inputs (see\ntesting principle 2)</strong></p>"
  },
  {
   "n": 2,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following options shows an example of test activities that contribute to success?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products"
    },
    {
     "letter": "b",
     "text": "Testers try not to disturb the developers while coding, so that the developers write better code"
    },
    {
     "letter": "c",
     "text": "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing"
    },
    {
     "letter": "d",
     "text": "Certified testers will design much better test cases than non-certified testers"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. It is important that testers are involved from the beginning of\nthe software development lifecycle (SDLC). It will increase\nunderstanding of design decisions and will detect defects early.</strong></p>\n<p><strong>b) Is not correct. Both developers and testers will have more\nunderstanding of each other's work products and how to test the code</strong></p>\n<p><strong>c) Is not correct. End users will not help the testers in increasing the quality\nof defect reports; also, users usually do not participate in low-level\ntesting levels like integration testing</strong></p>\n<p><strong>d) Is not correct. Being certified does not automatically mean that the\ntester will be better in test design</strong></p>"
  },
  {
   "n": 3,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.3.1",
   "selectCount": 1,
   "stem": "<p>You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?</p>",
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
     "text": "Defects cluster together"
    },
    {
     "letter": "d",
     "text": "Exhaustive testing is impossible"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. This principle means that if the same tests are repeated over\nand over again, eventually these tests no longer find any new defects.\nThis is probably why the tests all passed in this release as well</strong></p>\n<p><strong>b) Is not correct. This principle says about the mistaken belief that just\nfinding and fixing a large number of defects will ensure the success of a\nsystem</strong></p>\n<p><strong>c) Is not correct. This principle says that a small number of components\nusually contain most of the defects</strong></p>\n<p><strong>d) Is not correct. This principle states that testing all combinations of\ninputs and preconditions is not feasible</strong></p>"
  },
  {
   "n": 4,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.1",
   "selectCount": 1,
   "stem": "<p>You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality.</p>\n<p>Which of the following activities is a part of test analysis?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Estimating that testing the integration with the payment service will take 8 person-days"
    },
    {
     "letter": "b",
     "text": "Deciding that the team should test if it is possible to properly share payment between many users"
    },
    {
     "letter": "c",
     "text": "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid"
    },
    {
     "letter": "d",
     "text": "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Estimating the test effort is part of test planning</strong></p>\n<p><strong>b) Is correct. This is an example of defining test conditions which is a part\n\nof test analysis</strong></p>\n<p><strong>c) Is not correct. Using test techniques to derive coverage items is a part\n\nof test design</strong></p>\n<p><strong>d) Is not correct. Reporting defects found during dynamic testing is a part</strong></p>"
  },
  {
   "n": 5,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.2",
   "selectCount": 1,
   "stem": "<p>Which of the following factors have a SIGNIFICANT influence on the test approach?</p>\n<ul><li>i. The SDLC ii. The number of defects detected in previous projects iii. The identified product risks iv. New regulatory requirements forcing formal white-box testing v. The test environment setup</li></ul>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i, ii have significant influence"
    },
    {
     "letter": "b",
     "text": "i, iii, iv have significant influence"
    },
    {
     "letter": "c",
     "text": "ii, iv, v have significant influence"
    },
    {
     "letter": "d",
     "text": "iii, v have significant influence"
    }
   ],
   "answer": "b",
   "explanation": "<p>of test execution</p>\n<p><strong>i. Is true. The SDLC has an influence on the test approach</strong></p>\n<p><strong>ii. Is false. The number of defects detected in previous projects may\nhave some influence, but this is not as significant as i, iii and iv</strong></p>\n<p><strong>iii. Is true. The identified product risks are one of the most important\n\nfactors influencing the test approach</strong></p>\n<p><strong>iv. Is true. Regulatory requirements are important factors influencing the\n\ntest approach</strong></p>\n<p><strong>v. Is false. The test environment has no significant influence on the test\n\napproach</strong></p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 6,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.5",
   "selectCount": 2,
   "stem": "<p>Which TWO of the following tasks belong MAINLY to a testing role?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Configure test environments"
    },
    {
     "letter": "b",
     "text": "Maintain the product backlog"
    },
    {
     "letter": "c",
     "text": "Design solutions to new requirements"
    },
    {
     "letter": "d",
     "text": "Create the test plan"
    },
    {
     "letter": "e",
     "text": "Analyze the test basis"
    }
   ],
   "answer": [
    "a",
    "e"
   ],
   "explanation": "<p><strong>a) Is correct. This is done by the testers</strong></p>\n<p><strong>b) Is not correct. The product backlog is built and maintained by the\n\nproduct owner</strong></p>\n<p><strong>c) Is not correct. This is done by the development team</strong></p>\n<p><strong>d) Is not correct. This is a managerial role</strong></p>\n<p><strong>e) Is correct. This is done by the testers since its technical task done as</strong></p>"
  },
  {
   "n": 7,
   "points": 1,
   "k": "K2",
   "lo": "FL-1.5.1",
   "selectCount": 1,
   "stem": "<p>Which of the following skills (i-v) are the MOST important skills of a tester?</p>\n<ul><li>i. Having domain knowledge ii. Creating a product vision iii. Being a good team player iv. Planning and organizing the work of the team v. Critical thinking</li></ul>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "ii and iv are important"
    },
    {
     "letter": "b",
     "text": "i, iii and v are important"
    },
    {
     "letter": "c",
     "text": "i, ii and v are important"
    },
    {
     "letter": "d",
     "text": "iii and iv are important"
    }
   ],
   "answer": "b",
   "explanation": "<p>part of a test analysis.</p>\n<p><strong>i. Is true. Having domain knowledge is an important tester skill</strong></p>\n<p><strong>ii. Is false. This is a task of the business analyst together with the\nbusiness representative</strong></p>\n<p><strong>iii. Is true. Being a good team player is an important skill</strong></p>\n<p><strong>iv. Is false. Planning and organizing the work of the team is a task of the\ntest manager or, mostly in an Agile software development project,\nthe whole team and not just the tester</strong></p>\n<p><strong>v. Is true. Critical thinking is one of the most important skills of testers</strong></p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 8,
   "points": 1,
   "k": "K1",
   "lo": "FL-1.5.2",
   "selectCount": 1,
   "stem": "<p>How is the whole team approach present in the interactions between testers and business representatives?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Business representatives decide on test automation approaches"
    },
    {
     "letter": "b",
     "text": "Testers help business representatives to define a test strategy"
    },
    {
     "letter": "c",
     "text": "Business representatives are not part of the whole team approach"
    },
    {
     "letter": "d",
     "text": "Testers help business representatives to create suitable acceptance tests"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The test automation approach is defined by testers with\n\nthe help of developers and business representatives</strong></p>\n<p><strong>b) Is not correct. The test strategy is decided in collaboration with the\n\ndevelopers</strong></p>\n<p><strong>c) Is not correct. Testers, developers, and business representatives are\n\npart of the whole team approach</strong></p>\n<p><strong>d) Is correct. Testers will work closely with business representatives to</strong></p>"
  },
  {
   "n": 9,
   "points": 1,
   "k": "K1",
   "lo": "FL-2.1.2",
   "selectCount": 1,
   "stem": "<p>Consider the following rule: \"for every SDLC activity there is a corresponding test activity\". In which SDLC models does this rule hold?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Only in sequential development models"
    },
    {
     "letter": "b",
     "text": "Only in iterative development models"
    },
    {
     "letter": "c",
     "text": "Only in iterative and incremental development models"
    },
    {
     "letter": "d",
     "text": "In sequential, incremental, and iterative development models"
    }
   ],
   "answer": "d",
   "explanation": "<p>ensure that the desired quality levels are achieved. This includes\n\nsupporting and collaborating with them to help them create suitable\n\nacceptance tests</p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct. This rule holds for all SDLC models</strong></p>"
  },
  {
   "n": 10,
   "points": 1,
   "k": "K1",
   "lo": "FL-2.1.3",
   "selectCount": 1,
   "stem": "<p>Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "In ATDD, acceptance criteria are typically created based on the given/when/then format"
    },
    {
     "letter": "b",
     "text": "In ATDD, test cases are mainly created at component testing and are code-oriented"
    },
    {
     "letter": "c",
     "text": "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software"
    },
    {
     "letter": "d",
     "text": "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. It is more often used in behavior-driven development</strong></p>\n<p><strong>b) Is not correct. It is the description of test-driven development (TDD)</strong></p>\n<p><strong>c) Is correct. In acceptance test-driven development (ATDD) tests are\nwritten from acceptance criteria as part of the design process</strong></p>\n<p><strong>d) Is not correct. It is used in BDD</strong></p>"
  },
  {
   "n": 11,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.5",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT an example of the shift-left approach?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Reviewing the user requirements before they are formally accepted by the stakeholders"
    },
    {
     "letter": "b",
     "text": "Writing a component test before the corresponding code is written"
    },
    {
     "letter": "c",
     "text": "Executing a performance efficiency test for a component during component testing"
    },
    {
     "letter": "d",
     "text": "Writing a test script before setting up the configuration management process"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Early review is an example of the shift-left approach</strong></p>\n<p><strong>b) Is not correct. TDD is an example of the shift-left approach</strong></p>\n<p><strong>c) Is not correct. Early non-functional testing is an example of the shift-left\n\napproach</strong></p>\n<p><strong>d) Is correct. Test scripts should be subject to configuration management,</strong></p>"
  },
  {
   "n": 12,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.6",
   "selectCount": 1,
   "stem": "<p>Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes"
    },
    {
     "letter": "b",
     "text": "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product"
    },
    {
     "letter": "c",
     "text": "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization's continuous process improvement program"
    },
    {
     "letter": "d",
     "text": "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
    }
   ],
   "answer": "c",
   "explanation": "<p>so it makes no sense to create the test scripts before this process is set\nup</p>\n<p><strong>a) Is not correct. Retrospectives are more useful for identifying\nimprovement opportunities and have little importance for clients</strong></p>\n<p><strong>b) Is not correct. Retrospectives are not aimed to collect feedback about\nthe product, but about the process. Additionally, retrospectives are\ninternal activity for the team and should not include end user\nrepresentatives</strong></p>\n<p><strong>c) Is correct. Regularly conducted retrospectives, when appropriate follow\nup activities occur, are critical to continual improvement of development\nand testing</strong></p>\n<p><strong>d) Is not correct. Courage and respect are values of Extreme\nProgramming and are not closely related to retrospectives</strong></p>"
  },
  {
   "n": 13,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.1",
   "selectCount": 1,
   "stem": "<p>Which types of failures (1-4) fit which test levels (A-D) BEST?</p>\n<p>1. Failures in system behavior as it deviates from the user's business needs 2. Failures in communication between components</p>\n<p>3. Failures in logic in the code 4. Failures in not correctly implemented business rules</p>\n<p>A. Component testing B. Component integration testing C. System testing D. Acceptance testing</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1D, 2B, 3A, 4C"
    },
    {
     "letter": "b",
     "text": "1D, 2B, 3C, 4A"
    },
    {
     "letter": "c",
     "text": "1B, 2A, 3D, 4C"
    },
    {
     "letter": "d",
     "text": "1C, 2B, 3A, 4D"
    }
   ],
   "answer": "a",
   "explanation": "<p>Considering:\n– The test basis for acceptance testing is the user's business needs\n(1D)</p>\n<ul><li>Communication between components is tested during component\nintegration testing (2B)</li><li>Failures in logic can be found during component testing (3A)</li><li>Business rules are the test basis for system testing (4C)</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 14,
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.3",
   "selectCount": 1,
   "stem": "<p>You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:</p>\n<div class=\"exhibit\"><table>\n<thead><tr><th></th><th>Execution 1</th><th>Execution 2</th><th>Execution 3</th></tr></thead>\n<tbody>\n<tr><td>TC1</td><td>(1) Failed</td><td>(4) Passed</td><td>(7) Passed</td></tr>\n<tr><td>TC2</td><td>(2) Passed</td><td>(5) Failed</td><td>(8) Passed</td></tr>\n<tr><td>TC3</td><td>(3) Failed</td><td>(6) Failed</td><td>(9) Passed</td></tr>\n</tbody></table></div>\n<p>Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.</p>\n<p>Which of the above tests are executed as regression tests?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Only 4, 7, 8, 9"
    },
    {
     "letter": "b",
     "text": "Only 5, 7"
    },
    {
     "letter": "c",
     "text": "Only 4, 6, 8, 9"
    },
    {
     "letter": "d",
     "text": "Only 5, 6"
    }
   ],
   "answer": "b",
   "explanation": "<p>Because TC1 and TC3 failed in Execution 1 (i.e., test (1) and test (3)), test\n\n(4) and test (6) are confirmation tests.\n\nBecause TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8)\n\nand test (9) are also confirmation tests.\n\nTC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test.\n\nTC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression\n\ntest.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 15,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.1.2",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT a benefit of static testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Having less expensive defect management due to the ease of detecting defects later in the SDLC"
    },
    {
     "letter": "b",
     "text": "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing"
    },
    {
     "letter": "c",
     "text": "Finding coding defects that might not have been found by only performing dynamic testing"
    },
    {
     "letter": "d",
     "text": "Detecting gaps and inconsistencies in requirements"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Defect management is no less expensive. Finding and fixing\ndefects later in the SDLC is more costly</strong></p>\n<p><strong>b) Is not correct. This is a benefit of static testing</strong></p>\n<p><strong>c) Is not correct. This is a benefit of static testing</strong></p>\n<p><strong>d) Is not correct. This is a benefit of static testing</strong></p>"
  },
  {
   "n": 16,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is a benefit of early and frequent feedback?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It improves the test process for future projects"
    },
    {
     "letter": "b",
     "text": "It forces customers to prioritize their requirements based on agreed risks"
    },
    {
     "letter": "c",
     "text": "It provides a measure for the quality of changes"
    },
    {
     "letter": "d",
     "text": "It helps avoid requirements misunderstandings"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Feedback can improve the test process, but if one only\n\nwants to improve future projects, the feedback does not need to come\nearly or frequently</strong></p>\n<p><strong>b) Is not correct. Feedback is not used to prioritize requirements</strong></p>\n<p><strong>c) Is not correct. There is no one, recommended way to measure quality\nof changes. Also, this is not one of the benefits of early feedback that\nare mentioned in section 3.2.1</strong></p>\n<p><strong>d) Is correct. Early and frequent feedback can prevent misunderstandings\nabout requirements</strong></p>"
  },
  {
   "n": 17,
   "points": 1,
   "k": "K2",
   "lo": "FL-3.2.4",
   "selectCount": 1,
   "stem": "<p>The reviews being used in your organization have the following attributes:</p>\n<ul><li>There is the role of a scribe</li><li>The main purpose is to evaluate quality</li><li>The meeting is led by the author of the work product</li><li>There is individual preparation</li><li>A review report is produced</li></ul>\n<p>Which of the following review types is MOST likely being used?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Informal review"
    },
    {
     "letter": "b",
     "text": "Walkthrough"
    },
    {
     "letter": "c",
     "text": "Technical review"
    },
    {
     "letter": "d",
     "text": "Inspection"
    }
   ],
   "answer": "b",
   "explanation": "<p>Considering the attributes:\n– Specified for walkthroughs, technical reviews, and inspections; thus,\nthe reviews being performed cannot be informal reviews</p>\n<ul><li>The purpose of evaluating quality is one of the most important\nobjectives of a walkthrough</li><li>This is not allowed for inspections and is typically not done in\ntechnical reviews. A moderator is needed in walkthroughs and is\nallowed for informal reviews</li><li>All types of reviews can include individual preparation (even informal\nreviews)</li><li>All types of reviews can produce a review report, although informal\nreviews do not require documentation</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 18,
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.5",
   "selectCount": 1,
   "stem": "<p>Which of these statements is NOT a factor that contributes to successful reviews?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Participants should dedicate adequate time for the review"
    },
    {
     "letter": "b",
     "text": "Splitting large work products into small parts to make the required effort less intense"
    },
    {
     "letter": "c",
     "text": "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants"
    },
    {
     "letter": "d",
     "text": "Failures found should be acknowledged, appreciated, and handled objectively"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Adequate time for individuals is a success factor</strong></p>\n<p><strong>b) Is not correct. Splitting work products into small adequate parts is a\n\nsuccess factor</strong></p>\n<p><strong>c) Is not correct. Avoiding behaviors that might indicate boredom,\n\nexasperation, etc. is a success factor</strong></p>\n<p><strong>d) Is correct. During reviews one can find defects, not failures</strong></p>"
  },
  {
   "n": 19,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.1.1",
   "selectCount": 1,
   "stem": "<p>Which of the following is a characteristic of experience-based test techniques?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test cases are created based on detailed design information"
    },
    {
     "letter": "b",
     "text": "Items tested within the interface code section are used to measure coverage"
    },
    {
     "letter": "c",
     "text": "The test techniques heavily rely on the tester's knowledge of the software and the business domain"
    },
    {
     "letter": "d",
     "text": "The test cases are used to identify deviations from the requirements"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. This is a common characteristic of white-box test\ntechniques. Test conditions, test cases, and test data are derived from\na test basis that may include code, software architecture, detailed\ndesign, or any other source of information regarding the structure of the\nsoftware.</strong></p>\n<p><strong>b) Is not correct. This is a common characteristic of white-box test\ntechniques. Coverage is measured based on the items tested within a\nselected structure and the test technique applied to the test basis</strong></p>\n<p><strong>c) Is correct. This is a common characteristic of experience-based test\ntechniques. This knowledge and experience include expected use of\nthe software, its environment, likely defects, and the distribution of\nthose defects is used to define tests</strong></p>\n<p><strong>d) Is not correct. This is a common characteristic of black-box test\ntechniques. Test cases may be used to detect gaps within requirements\nand the implementation of the requirements, as well as deviations from\nthe requirements</strong></p>"
  },
  {
   "n": 20,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.1",
   "selectCount": 1,
   "stem": "<p>You are testing a simplified apartment search form which has only two search criteria:</p>\n<ul><li>floor (with three possible options: ground floor; first floor; second or higher floor)</li><li>garden type (with three possible options: no garden; small garden; large garden)</li></ul>\n<p>Each of the apartment on the ground floor has a garden, apartments on higher floors don't. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule.</p>\n<p>Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests.</p>\n<p>What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "3"
    },
    {
     "letter": "b",
     "text": "4"
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
   "answer": "b",
   "explanation": "<p>The situation presented in the question is described in the syllabus as \"each\nchoice\" coverage.\n\n\"Small garden\" and \"large garden\" can go only with \"ground floor\", so we\nneed two test cases with \"ground floor\" which cover these two \"garden type\"\npartitions.\n\nWe need two more test cases to cover the two other \"floor\" partitions. The\nremaining \"garden type\" partition of \"no garden\" is covered by these tests.\nWe need a total of four test cases:\n\nTC1 (ground floor, small garden)\n\nTC2 (ground floor, large garden)\n\nTC3 (first floor, no garden)\n\nTC4 (second or higher floor, no garden)</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 21,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.2",
   "selectCount": 1,
   "stem": "<p>You are testing a system that calculates the final course grade for a given student.</p>\n<p>The final grade is assigned based on the final result, according to the following rules:</p>\n<ul><li>0–50 points: failed</li><li>51–60 points: fair</li><li>61–70 points: satisfactory</li><li>71–80 points: good</li><li>81–90 points: very good</li><li>91–100 points: excellent</li></ul>\n<p>You have prepared the following set of test cases:</p>\n<div class=\"exhibit\"><table>\n<thead><tr><th></th><th>Final result</th><th>Final grade</th></tr></thead>\n<tbody>\n<tr><td>TC1</td><td>91</td><td>excellent</td></tr>\n<tr><td>TC2</td><td>50</td><td>failed</td></tr>\n<tr><td>TC3</td><td>81</td><td>very good</td></tr>\n<tr><td>TC4</td><td>60</td><td>fair</td></tr>\n<tr><td>TC5</td><td>70</td><td>satisfactory</td></tr>\n<tr><td>TC6</td><td>80</td><td>good</td></tr>\n</tbody></table></div>\n<p>What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "50%"
    },
    {
     "letter": "b",
     "text": "60%"
    },
    {
     "letter": "c",
     "text": "33.3%"
    },
    {
     "letter": "d",
     "text": "100%"
    }
   ],
   "answer": "a",
   "explanation": "<p>There are 12 boundary values for the final result values: 0, 50, 51, 60, 61,\n70, 71, 80, 81, 90, 91, and 100.\nThe test cases cover six of them (TC1–91, TC2–50, TC3–81, TC4–60,\nTC5–70 and TC7–51).\nTherefore, the test cases cover 6/12 = 50%.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 22,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.3",
   "selectCount": 1,
   "stem": "<p>Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it.</p>\n<p>The implemented features are as follows:</p>\n<ul><li>Anyone can rent a bicycle, but members receive a 20% discount</li><li>However, if the return deadline is missed, the discount is no longer available</li><li>After 15 rentals, members get a gift: a T-Shirt</li></ul>\n<p>Decision table describing the implemented features looks as follows:</p>\n<p>Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th>Conditions</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr></thead>\n<tbody>\n<tr><td>Being a member</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>\n<tr><td>Missed deadline</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td></tr>\n<tr><td>15th rental</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>\n<tr><td><strong>Actions</strong></td><td colspan=\"8\"></td></tr>\n<tr><td>20% discount</td><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td></tr>\n<tr><td>Gift T-Shirt</td><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td></td><td>X</td></tr>\n</tbody></table></div>",
   "options": [
    {
     "letter": "a",
     "text": "R4"
    },
    {
     "letter": "b",
     "text": "R2"
    },
    {
     "letter": "c",
     "text": "R6"
    },
    {
     "letter": "d",
     "text": "R8"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. A member without a missed deadline can get a discount\n\nand a gift T-Shirt after 15 bicycle rentals</strong></p>\n<p><strong>b) Is not correct. A member without a missed deadline can get a discount\n\nbut no gift T-Shirt until they rented a bicycle 15 times</strong></p>\n<p><strong>c) Is not correct. Non-members cannot get a discount, even if they did not\n\nmiss a deadline yet</strong></p>\n<p><strong>d) Is correct. No discount as a non-member that has also missed a</strong></p>"
  },
  {
   "n": 23,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.2.4",
   "selectCount": 1,
   "stem": "<p>You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.</p>\n<p>What is the MINIMAL number of test cases to achieve valid transitions coverage?</p>",
   "exhibit": "<div class=\"exhibit\"><svg viewBox=\"0 0 640 250\" xmlns=\"http://www.w3.org/2000/svg\" font-size=\"13\">\n<defs><marker id=\"arrA23\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 z\" fill=\"#0f2540\"/></marker></defs>\n<style>.st{fill:#fff;stroke:#0f2540;stroke-width:1.6;} .lbl{font-weight:bold;fill:#0f2540;} .ev{fill:#2563eb;font-weight:bold;} .ln{stroke:#0f2540;stroke-width:1.4;fill:none;marker-end:url(#arrA23);}</style>\n<rect class=\"st\" x=\"20\" y=\"105\" width=\"92\" height=\"40\" rx=\"9\"/><text class=\"lbl\" x=\"66\" y=\"130\" text-anchor=\"middle\">INIT</text>\n<rect class=\"st\" x=\"250\" y=\"22\" width=\"110\" height=\"46\" rx=\"9\"/><text class=\"lbl\" x=\"305\" y=\"40\" text-anchor=\"middle\">DEBUG</text><text class=\"lbl\" x=\"305\" y=\"56\" text-anchor=\"middle\">MODE</text>\n<rect class=\"st\" x=\"480\" y=\"28\" width=\"90\" height=\"40\" rx=\"9\" style=\"stroke-width:3\"/><text class=\"lbl\" x=\"525\" y=\"53\" text-anchor=\"middle\">OFF</text>\n<rect class=\"st\" x=\"235\" y=\"172\" width=\"125\" height=\"52\" rx=\"9\"/><text class=\"lbl\" x=\"297\" y=\"192\" text-anchor=\"middle\">IN</text><text class=\"lbl\" x=\"297\" y=\"210\" text-anchor=\"middle\">OPERATION</text>\n<rect class=\"st\" x=\"470\" y=\"176\" width=\"100\" height=\"42\" rx=\"9\"/><text class=\"lbl\" x=\"520\" y=\"202\" text-anchor=\"middle\">ON HOLD</text>\n<path class=\"ln\" d=\"M112,112 C170,58 205,48 248,45\"/><text class=\"ev\" x=\"160\" y=\"50\">test</text>\n<path class=\"ln\" d=\"M78,145 C78,200 175,198 233,198\"/><text class=\"ev\" x=\"130\" y=\"214\">run</text>\n<path class=\"ln\" d=\"M360,45 L478,45\"/><text class=\"ev\" x=\"405\" y=\"36\">done</text>\n<path class=\"ln\" d=\"M300,172 L300,70\"/><text class=\"ev\" x=\"310\" y=\"125\">error</text>\n<path class=\"ln\" d=\"M362,188 L468,188\"/><text class=\"ev\" x=\"400\" y=\"181\">pause</text>\n<path class=\"ln\" d=\"M468,214 L362,214\"/><text class=\"ev\" x=\"395\" y=\"233\">resume</text>\n<path class=\"ln\" d=\"M522,176 L522,70\"/><text class=\"ev\" x=\"530\" y=\"128\">done</text>\n</svg></div>",
   "options": [
    {
     "letter": "a",
     "text": "4"
    },
    {
     "letter": "b",
     "text": "2"
    },
    {
     "letter": "c",
     "text": "7"
    },
    {
     "letter": "d",
     "text": "3"
    }
   ],
   "answer": "d",
   "explanation": "<p>deadline, but only members can receive a gift T-Shirt. Hence, the action\n\nis not correct\n\n\n\n\"test\" and \"error\" transitions cannot occur in one test case.\nNeither can both \"done\" transitions.\nThis means we need at least three test cases to achieve transition\ncoverage. For example:</p>\n<ul><li>TC1: test, done</li><li>TC2: run, error, done</li><li>TC3: run, pause, resume, pause, done</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct</strong></p>"
  },
  {
   "n": 24,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.1",
   "selectCount": 1,
   "stem": "<p>Your test suite achieved 100% statement coverage. What is the consequence of this fact?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Each instruction in the code that contains a defect has been executed at least once"
    },
    {
     "letter": "b",
     "text": "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage"
    },
    {
     "letter": "c",
     "text": "Each path in the code has been executed at least once"
    },
    {
     "letter": "d",
     "text": "Every combination of input values has been tested at least once"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Since 100% statement coverage is achieved, every\n\nstatement, including the ones with defects, must have been executed\n\nand evaluated at least once</strong></p>\n<p><strong>b) Is not correct. Coverage depends on what is tested, not on the number\n\nof test cases. For example, for code \"if (x==0) y=1\", one test case (x=0)\n\nachieves 100% statement coverage, but two test cases (x=1) and (x=2)\n\ntogether achieve only 50% statement coverage</strong></p>\n<p><strong>c) Is not correct. If there is a loop in the code there may be an infinite\n\nnumber of possible paths, so it is not possible to execute all the\n\npossible paths in the code</strong></p>\n<p><strong>d) Is not correct. Exhaustive testing is not possible (see the seven testing</strong></p>"
  },
  {
   "n": 25,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.3",
   "selectCount": 1,
   "stem": "<p>Which of the following is NOT true for white-box testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "During white-box testing the entire software implementation is considered"
    },
    {
     "letter": "b",
     "text": "White-box coverage metrics can help identify additional tests to increase code coverage"
    },
    {
     "letter": "c",
     "text": "White-box test techniques can be used in static testing"
    },
    {
     "letter": "d",
     "text": "White-box testing can help identify gaps in requirements implementation"
    }
   ],
   "answer": "d",
   "explanation": "<p>principles section in the syllabus). For example, for code \"input x; print\n\nx\" any single test with arbitrary x achieves 100% statement coverage,\n\nbut covers one input value</p>\n<p><strong>a) Is not correct. The fundamental strength of white-box test techniques is\nthat the entire software implementation is taken into account during\ntesting</strong></p>\n<p><strong>b) Is not correct. White-box coverage measures provide an objective\nmeasure of coverage and provide the necessary information to allow\nadditional tests to be generated to increase this coverage</strong></p>\n<p><strong>c) Is not correct. White-box test techniques can be used to perform\nreviews (static testing)</strong></p>\n<p><strong>d) Is correct. This is the weakness of the white-box test techniques. They\nare not able to identify the missing implementation, because they are\nbased solely on the test object structure, not on the requirements\nspecification</strong></p>"
  },
  {
   "n": 26,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.1",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST describes the concept behind error guessing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers"
    },
    {
     "letter": "b",
     "text": "Error guessing involves using your personal experience of development and the errors you made as a developer"
    },
    {
     "letter": "c",
     "text": "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it"
    },
    {
     "letter": "d",
     "text": "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. The basic concept behind error guessing is that the tester\n\ntries to guess what errors may have been made by the developer and\n\nwhat defects may be in the test object based on past experience (and\n\nsometimes checklists)</strong></p>\n<p><strong>b) Is not correct. Although a tester who used to be a developer may use\n\ntheir personal experience to help them when performing error guessing,\n\nthe test technique is not based on prior knowledge of development</strong></p>\n<p><strong>c) Is not correct. Error guessing is not a usability technique for guessing\n\nhow users may fail to interact with the test object</strong></p>\n<p><strong>d) Is not correct. Duplicating the development task has several flaws that</strong></p>"
  },
  {
   "n": 27,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.2",
   "selectCount": 1,
   "stem": "<p>In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented.</p>\n<p>Which test technique fits BEST in this situation?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Checklist-based testing"
    },
    {
     "letter": "b",
     "text": "Error guessing"
    },
    {
     "letter": "c",
     "text": "Exploratory testing"
    },
    {
     "letter": "d",
     "text": "Branch testing"
    }
   ],
   "answer": "c",
   "explanation": "<p>make it impractical, such as the tester having equivalent skills to the\n\ndeveloper and the time involved to perform the development. It is not\n\nerror guessing</p>\n<p><strong>a) Is not correct. This is a new product. You probably do not have a\nchecklist yet and test conditions might not be known due to missing\nrequirements</strong></p>\n<p><strong>b) Is not correct. This is a new product. You probably do not have enough\ninformation to make correct error guesses</strong></p>\n<p><strong>c) Is correct. Exploratory testing is most useful when there are few known\nspecifications and/or there is a pressing timeline for testing</strong></p>\n<p><strong>d) Is not correct. Branch testing is time-consuming, and your management\nis asking about some test results now. Also, branch testing does not\ninvolve domain knowledge</strong></p>"
  },
  {
   "n": 28,
   "points": 1,
   "k": "K2",
   "lo": "FL-4.5.2",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST describes the way acceptance criteria can be documented?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story"
    },
    {
     "letter": "b",
     "text": "Using the given/when/then format to describe an example test condition related to a given user story"
    },
    {
     "letter": "c",
     "text": "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others"
    },
    {
     "letter": "d",
     "text": "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Retrospectives are used to capture lessons learned and\nto improve the development and testing process, not to document the\nacceptance criteria</strong></p>\n<p><strong>b) Is correct. This is the standard way to document acceptance criteria</strong></p>\n<p><strong>c) Is not correct. Verbal communication does not allow to physically\n\ndocument the acceptance criteria as part of a user story (\"card\" aspect\nin the 3C's model)</strong></p>\n<p><strong>d) Is not correct. Acceptance criteria are related to a user story, not a test\nplan. Also, acceptance criteria are the conditions that have to be fulfilled\nto decide if the user story is complete. Risks are not such conditions</strong></p>"
  },
  {
   "n": 29,
   "points": 1,
   "k": "K3",
   "lo": "FL-4.5.3",
   "selectCount": 1,
   "stem": "<p>Consider the following user story:</p>\n<p>As an Editor I want to review content before it is published so that I can ensure the grammar is correct</p>\n<p>and its acceptance criteria:</p>\n<ul><li>The user can log in to the content management system with \"Editor\" role</li><li>The editor can view existing content pages</li><li>The editor can edit the page content</li><li>The editor can add markup comments</li><li>The editor can save changes</li><li>The editor can reassign to the \"content owner\" role to make updates</li></ul>\n<p>Which of the following is the BEST example of an ATDD test for this user story?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test if the editor can save the document after edit the page content"
    },
    {
     "letter": "b",
     "text": "Test if the content owner can log in and make updates to the content"
    },
    {
     "letter": "c",
     "text": "Test if the editor can schedule the edited content for publication"
    },
    {
     "letter": "d",
     "text": "Test if the editor can reassign to another editor to make updates"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. This test covers two acceptance criteria: one about editing\nthe document and one about saving changes</strong></p>\n<p><strong>b) Is not correct. Acceptance criteria cover the editor activities, not the\ncontent owner activities</strong></p>\n<p><strong>c) Is not correct. Scheduling the edited content for publication may be a\nnice feature, but it is not covered by the acceptance criteria</strong></p>\n<p><strong>d) Is not correct. Acceptance criteria state about reassigning from an\neditor to the content owner, not to another editor</strong></p>"
  },
  {
   "n": 30,
   "points": 1,
   "k": "K1",
   "lo": "FL-5.1.2",
   "selectCount": 1,
   "stem": "<p>How do testers add value to iteration and release planning?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Testers determine the priority of the user stories to be developed"
    },
    {
     "letter": "b",
     "text": "Testers focus only on the functional aspects of the system to be tested"
    },
    {
     "letter": "c",
     "text": "Testers participate in the detailed risk identification and risk assessment of user stories"
    },
    {
     "letter": "d",
     "text": "Testers guarantee the release of high-quality software through early test design during the release planning"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Priorities for user stories are determined by the business\nrepresentative together with the development team</strong></p>\n<p><strong>b) Is not correct. Testers focus on both functional and non-functional\naspects of the system to be tested</strong></p>\n<p><strong>c) Is correct. According to the syllabus, this is one of the ways testers add\nvalue to iteration and release planning</strong></p>\n<p><strong>d) Is not correct. Early test design is not part of release planning. Early\ntest design does not automatically guarantee the release of quality\nsoftware</strong></p>"
  },
  {
   "n": 31,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.3",
   "selectCount": 2,
   "stem": "<p>Which TWO of the following options are the exit criteria for testing a system?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test environment readiness"
    },
    {
     "letter": "b",
     "text": "The ability to log in to the test object by the tester"
    },
    {
     "letter": "c",
     "text": "Estimated defect density is reached"
    },
    {
     "letter": "d",
     "text": "Requirements are translated into given/when/then format"
    },
    {
     "letter": "e",
     "text": "Regression tests are automated"
    }
   ],
   "answer": [
    "c",
    "e"
   ],
   "explanation": "<p><strong>a) Is not correct. Test environment readiness is a resource availability\ncriterion; hence it belongs to the entry criteria</strong></p>\n<p><strong>b) Is not correct. This is a resource availability criterion; hence it belongs\nto the entry criteria</strong></p>\n<p><strong>c) Is correct. Estimated defect density is a measure of diligence; hence it\nbelongs to the exit criteria.</strong></p>\n<p><strong>d) Is not correct. Requirements translated into a given format result in\ntestable requirements; hence it belongs to the entry criteria</strong></p>\n<p><strong>e) Is correct. Automation of regression tests is a completion criterion;\nhence it belongs to the exit criteria</strong></p>"
  },
  {
   "n": 32,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.4",
   "selectCount": 1,
   "stem": "<p>Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:</p>\n<ul><li>Most optimistic estimation: 2 person-hours</li><li>Most likely estimation: 11 person-hours</li><li>Most pessimistic estimation: 14 person-hours</li></ul>\n<p>What is the final estimate?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "9 person-hours"
    },
    {
     "letter": "b",
     "text": "14 person-hours"
    },
    {
     "letter": "c",
     "text": "11 person-hours"
    },
    {
     "letter": "d",
     "text": "10 person-hours"
    }
   ],
   "answer": "d",
   "explanation": "<p>In the three-point estimation technique:\nE = (optimistic + 4*most likely + pessimistic)/6\nE = (2+(4*11)+14)/6 = 10</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct</strong></p>"
  },
  {
   "n": 33,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.5",
   "selectCount": 1,
   "stem": "<p>You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th>Test case number</th><th>Test condition covered</th><th>Priority</th><th>Logical dependency</th></tr></thead>\n<tbody>\n<tr><td>TC 001</td><td>Select type of food</td><td>3</td><td>none</td></tr>\n<tr><td>TC 002</td><td>Select restaurant</td><td>2</td><td>TC 001</td></tr>\n<tr><td>TC 003</td><td>Get direction</td><td>1</td><td>TC 002</td></tr>\n<tr><td>TC 004</td><td>Call restaurant</td><td>2</td><td>TC 002</td></tr>\n<tr><td>TC 005</td><td>Make reservation</td><td>3</td><td>TC 002</td></tr>\n</tbody></table></div><p>Which of the following test cases should be executed as the third one?</p>",
   "options": [
    {
     "letter": "a",
     "text": "TC 003"
    },
    {
     "letter": "b",
     "text": "TC 005"
    },
    {
     "letter": "c",
     "text": "TC 002"
    },
    {
     "letter": "d",
     "text": "TC 001"
    }
   ],
   "answer": "a",
   "explanation": "<p>Test TC 001 must come first, followed by TC 002, to satisfy dependencies.\nAfterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 34,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.7",
   "selectCount": 1,
   "stem": "<p>Consider the following test categories (1-4) and agile testing quadrants (A-D):</p>\n<p>1. Usability testing 2. Component testing 3. Functional testing 4. Reliability testing</p>\n<p>A. Agile testing quadrant Q1: technology facing, supporting the development team B. Agile testing quadrant Q2: business facing, supporting the development team C. Agile testing quadrant Q3: business facing, critique the product D. Agile testing quadrant Q4: technology facing, critique the product</p>\n<p>How do the following test categories map onto the agile testing quadrants?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "1C, 2A, 3B, 4D"
    },
    {
     "letter": "b",
     "text": "1D, 2A, 3C, 4B"
    },
    {
     "letter": "c",
     "text": "1C, 2B, 3D, 4A"
    },
    {
     "letter": "d",
     "text": "1D, 2B, 3C, 4A"
    }
   ],
   "answer": "a",
   "explanation": "<p>Considering:</p>\n<ul><li>Usability testing is in Q3 (1 – C)</li><li>Component testing is in Q1 (2 – A)</li><li>Functional testing is in Q2 (3 – B)</li><li>Reliability testing is in Q4 (4 – D)</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": 35,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.2.4",
   "selectCount": 1,
   "stem": "<p>During a risk analysis the following risk was identified and assessed:</p>\n<ul><li>Risk: Response time is too long to generate a report</li><li>Risk likelihood: medium; risk impact: high</li><li>Response to risk:</li></ul>\n<p>o An independent test team performs performance efficiency testing during system testing</p>\n<p>o A selected sample of end users performs alpha testing and beta testing before the release</p>\n<p>What measure is proposed to be taken in response to this analyzed risk?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Risk acceptance"
    },
    {
     "letter": "b",
     "text": "Contingency plan"
    },
    {
     "letter": "c",
     "text": "Risk mitigation"
    },
    {
     "letter": "d",
     "text": "Risk transfer"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. We do not accept the risk; concrete actions are proposed</strong></p>\n<p><strong>b) Is not correct. No contingency plans are proposed</strong></p>\n<p><strong>c) Is correct. The proposed actions are related to testing, which is a form\n\nof risk mitigation</strong></p>\n<p><strong>d) Is not correct. Risk is not transferred but mitigated</strong></p>"
  },
  {
   "n": 36,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.3.3",
   "selectCount": 1,
   "stem": "<p>Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Acceptance criteria"
    },
    {
     "letter": "b",
     "text": "Defect report"
    },
    {
     "letter": "c",
     "text": "Test completion report"
    },
    {
     "letter": "d",
     "text": "Burndown chart"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Acceptance criteria are the conditions used to decide\nwhether the user story is ready. They cannot show work progress</strong></p>\n<p><strong>b) Is not correct. Defect reports inform about the defects. They do not\nshow work progress</strong></p>\n<p><strong>c) Is not correct. Test completion report can be created after the iteration\nis finished, so it will not show the progress continuously within an\niteration</strong></p>\n<p><strong>d) Is correct. Burndown charts are a graphical representation of work left\nto do versus time remaining. They are updated daily, so they can\ncontinuously show the work progress</strong></p>"
  },
  {
   "n": 37,
   "points": 1,
   "k": "K2",
   "lo": "FL-5.4.1",
   "selectCount": 1,
   "stem": "<p>You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Traceability management"
    },
    {
     "letter": "b",
     "text": "Maintenance testing"
    },
    {
     "letter": "c",
     "text": "Configuration management"
    },
    {
     "letter": "d",
     "text": "Requirements engineering"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Traceability is the relationship between two or more work\nproducts, not between different versions of the same work product</strong></p>\n<p><strong>b) Is not correct. Maintenance testing is about testing changes; it is not\nrelated closely to versioning</strong></p>\n<p><strong>c) Is correct. To support testing, configuration management may involve\nthe version control of all test items</strong></p>\n<p><strong>d) Is not correct. Requirements engineering is the elicitation,\ndocumentation, and management of requirements; it is not closely\nrelated to test script versioning</strong></p>"
  },
  {
   "n": 38,
   "points": 1,
   "k": "K3",
   "lo": "FL-5.5.1",
   "selectCount": 1,
   "stem": "<p>You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.</p>\n<p>Application hangs up</p>\n<p>2022-May-03 – John Doe – Rejected</p>\n<p>The application hangs up after entering \"Test input: $–\" in the Name field on the new user creation screen. Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue. No error message received; log (see attached) contains fatal error notification. Based on the test case TC-1305, the application should accept the provided input and create the user. Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement.</p>\n<p>What critical information is MISSING from this test report that would have been useful for the developers?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Expected result and actual result"
    },
    {
     "letter": "b",
     "text": "References and defect status"
    },
    {
     "letter": "c",
     "text": "Test environment and test item"
    },
    {
     "letter": "d",
     "text": "Priority and severity"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. The expected result is \"the application should accept the\nprovided input and create the user\". The actual result is \"The\napplication hangs up after entering \"Test input. $–\"\".</strong></p>\n<p><strong>b) Is not correct. There is a reference to the test case and to the related\nrequirement and it states that the defect is rejected. Also, the defect\nstatus would not be very helpful for the developers</strong></p>\n<p><strong>c) Is correct. We do not know in which test environment the anomaly was\ndetected, and we also do not know which application (and its version) is\naffected</strong></p>\n<p><strong>d) Is not correct. The defect report states that the anomaly is urgent, that it\nis a global issue (i.e., many, if not all, test administration accounts are\naffected) and states the impact is high for business stakeholders</strong></p>"
  },
  {
   "n": 39,
   "points": 1,
   "k": "K2",
   "lo": "FL-6.1.1",
   "selectCount": 1,
   "stem": "<p>Which test activity does a data preparation tool support?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test monitoring and test control"
    },
    {
     "letter": "b",
     "text": "Test analysis"
    },
    {
     "letter": "c",
     "text": "Test design and test implementation"
    },
    {
     "letter": "d",
     "text": "Test completion"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Test monitoring involves the ongoing checking of all\nactivities and comparison of actual progress against the test plan. Test\ncontrol involves taking the actions necessary to meet the test objectives\nof the test plan. No test data are prepared during these activities.</strong></p>\n<p><strong>b) Is not correct. Test analysis includes analysis of the test basis to\nidentify test conditions and prioritize them. Test data are not prepared\nduring this activity.</strong></p>\n<p><strong>c) Is correct. Test design and implementation can both include the\nidentification, creation or acquisition of the testware necessary for test\nexecution (e.g., test data).</strong></p>\n<p><strong>d) Is not correct. Test completion activities occur at project milestones\n(e.g., release, end of iteration, test level completion), so it is too late for\npreparing test data.</strong></p>"
  },
  {
   "n": 40,
   "points": 1,
   "k": "K1",
   "lo": "FL-6.2.1",
   "selectCount": 1,
   "stem": "<p>Which item correctly identifies a potential risk of performing test automation?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It may introduce unknown regressions in production"
    },
    {
     "letter": "b",
     "text": "Sufficient efforts to maintain testware may not be properly allocated"
    },
    {
     "letter": "c",
     "text": "Testing tools and associated testware may not be sufficiently relied upon"
    },
    {
     "letter": "d",
     "text": "It may reduce the time allocated for manual testing"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Test automation does not introduce unknown regressions\nin production</strong></p>\n<p><strong>b) Is correct. Wrong allocation of effort to maintain testware is a risk</strong></p>\n<p><strong>c) Is not correct. Test tools must be selected so that they and their\n\ntestware can be relied upon</strong></p>\n<p><strong>d) Is not correct. The primary goal of test automation is to reduce manual\n\ntesting. So, this is a benefit, not a risk</strong></p>"
  }
 ],
 "extras": [
  {
   "n": "A1",
   "points": 1,
   "k": "K2",
   "lo": "FL-1.1.2",
   "selectCount": 1,
   "stem": "<p>You were given a task to analyze and fix causes of failures in a new system to be released.</p>\n<p>Which activity are you performing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Debugging"
    },
    {
     "letter": "b",
     "text": "Software testing"
    },
    {
     "letter": "c",
     "text": "Requirement elicitation"
    },
    {
     "letter": "d",
     "text": "Defect management"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. Debugging is the process of finding, analyzing, and removing\nthe causes of failures in a component or system</strong></p>\n<p><strong>b) Is not correct. Testing is the process concerned with planning,\npreparation and evaluation of a component or system and related work\nproducts to determine that they satisfy specified requirements, to\ndemonstrate that they are fit for purpose and to detect defects. It is not\nrelated to fixing causes of failures</strong></p>\n<p><strong>c) Is not correct. Requirement elicitation is the process of gathering,\ncapturing, and consolidating requirements from available sources. It is\nnot related to fixing causes of failures</strong></p>\n<p><strong>d) Is not correct. Defect management is the process of recognizing,\nrecording, classifying, investigating, resolving, and disposing of defects.\nIt is not related to fixing causes of failures</strong></p>"
  },
  {
   "n": "A2",
   "points": 1,
   "k": "K1",
   "lo": "FL-1.2.2",
   "selectCount": 1,
   "stem": "<p>In many software organizations the test department is called the Quality Assurance (QA) department. Is this sentence correct or not and why?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It is correct. Testing and QA mean exactly the same thing"
    },
    {
     "letter": "b",
     "text": "It is correct. These names can be used interchangeably because both testing and QA focus their activities on the same quality issues"
    },
    {
     "letter": "c",
     "text": "It is not correct. Testing is something more; testing includes all activities with regard to quality. QA focuses on quality-related processes"
    },
    {
     "letter": "d",
     "text": "It is not correct. QA is focused on quality-related processes while testing concentrates on demonstrating that a component or system is fit for purpose and to detect defects"
    }
   ],
   "answer": "d",
   "explanation": "<p>Considering:\nTesting and quality assurance are not the same. Testing is the\nprocess consisting of all software development lifecycle (SDLC)\nactivities, both static and dynamic, concerned with planning,\npreparation and evaluation of a component or system and related\nwork products to determine that they satisfy specified requirements, to\ndemonstrate that they are fit for purpose and to detect defects. Quality\nassurance is focused on establishing, introducing, monitoring,\nimproving, and adhering to the quality-related processes.</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct</strong></p>"
  },
  {
   "n": "A3",
   "points": 1,
   "k": "K2",
   "lo": "FL-1.2.3",
   "selectCount": 1,
   "stem": "<p>A phone ringing in a neighboring cubicle distracts a programmer causing him to improperly program the logic that checks the upper boundary of an input variable. Later, during system testing, a tester notices that this input field accepts invalid input values.</p>\n<p>Which of the following correctly describes an incorrectly coded upper bound?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The root cause"
    },
    {
     "letter": "b",
     "text": "A failure"
    },
    {
     "letter": "c",
     "text": "An error"
    },
    {
     "letter": "d",
     "text": "A defect"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The root cause is the distraction that the programmer\n\nexperienced while programming</strong></p>\n<p><strong>b) Is not correct. Accepting invalid inputs is a failure</strong></p>\n<p><strong>c) Is not correct. The error in thinking that put the defect in the code</strong></p>\n<p><strong>d) Is correct. The problem in the code is a defect</strong></p>"
  },
  {
   "n": "A4",
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.3",
   "selectCount": 1,
   "stem": "<p>Consider the following testware.</p>\n<p>Test Charter #04.018 Session time: 1h</p>\n<p>Explore: Registration page With: To discover: Different sets of incorrect input data Defects related to accepting the registration process with the incorrect input</p>\n<p>Which test activity produces this testware as an output?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Test planning"
    },
    {
     "letter": "b",
     "text": "Test monitoring and test control"
    },
    {
     "letter": "c",
     "text": "Test analysis"
    },
    {
     "letter": "d",
     "text": "Test design"
    }
   ],
   "answer": "d",
   "explanation": "<p>The testware under consideration is a test charter\n\nTest charters are the output from test design</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct</strong></p>"
  },
  {
   "n": "A5",
   "points": 1,
   "k": "K2",
   "lo": "FL-1.4.4",
   "selectCount": 1,
   "stem": "<p>Which of the following is the BEST example of how traceability supports testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Performing the impact analysis of a change will give information about the completion of the tests"
    },
    {
     "letter": "b",
     "text": "Analyzing the traceability between test cases and test results will give information about the estimated level of residual risk"
    },
    {
     "letter": "c",
     "text": "Performing the impact analysis of a change will help selecting the right test cases for regression testing"
    },
    {
     "letter": "d",
     "text": "Analyzing the traceability between the test basis, the test objects and the test cases will help in selecting test data to achieve the assumed coverage of the test object"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Performing the impact analysis will not give information\nabout completeness of tests. Analyzing the impact analysis of changes\nwill help to select the right test cases for execution</strong></p>\n<p><strong>b) Is not correct. Traceability does not give information about the\nestimated level of residual risk if the test cases are not traced back to\nrisks</strong></p>\n<p><strong>c) Is correct. Performing the impact analysis of the changes helps in\nselecting the test cases for the regression test</strong></p>\n<p><strong>d) Is not correct. Analyzing the traceability between the test basis, test\nobjects and test cases does not help in selecting test data to achieve\nthe assumed coverage of the test object. Selecting test data is more\nrelated to test analysis and test implementation, not traceability</strong></p>"
  },
  {
   "n": "A6",
   "points": 1,
   "k": "K2",
   "lo": "FL-1.5.3",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST explains a benefit of independence of testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team"
    },
    {
     "letter": "b",
     "text": "If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines"
    },
    {
     "letter": "c",
     "text": "An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system"
    },
    {
     "letter": "d",
     "text": "When specifications contain ambiguities and inconsistencies, assumptions are made on their interpretation, and an independent tester can be useful in questioning those assumptions and the interpretation made by the developer"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. Quality should be the responsibility of everyone working\non the project and not the sole responsibility of the test team</strong></p>\n<p><strong>b) Is not correct. First, it is not a benefit if an external test team does not\nmeet delivery deadlines, and second, there is no reason to believe that\nexternal test teams will feel they do not have to meet strict delivery\ndeadlines</strong></p>\n<p><strong>c) Is not correct. It is bad practice for the test team to work in complete\nisolation, and we would expect an external test team to be concerned\nwith changing project requirements and communicating well with\ndevelopers</strong></p>\n<p><strong>d) Is correct. Specifications are never perfect, meaning that assumptions\nwill have to be made by the developer. An independent tester is useful\nin that they can challenge and verify the assumptions and subsequent\ninterpretation made by the developer</strong></p>"
  },
  {
   "n": "A7",
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.1",
   "selectCount": 2,
   "stem": "<p>You are working as a tester in the team that follows the V-model. Which of the following activities CAN be performed in the initial phases of the SDLC?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Dynamic test execution"
    },
    {
     "letter": "b",
     "text": "Static testing"
    },
    {
     "letter": "c",
     "text": "Test planning"
    },
    {
     "letter": "d",
     "text": "Acceptance test execution"
    },
    {
     "letter": "e",
     "text": "Maintenance testing"
    }
   ],
   "answer": [
    "b",
    "c"
   ],
   "explanation": "<p><strong>a) Is not correct. The executable code is usually created in the later\nphases, so dynamic test execution cannot be performed early in the\nSDLC</strong></p>\n<p><strong>b) Is correct. In sequential development models, in the initial phases,\ntesters participate in requirement reviews, which is a form of static\ntesting.</strong></p>\n<p><strong>c) Is correct. Test planning could be performed early in the SDLC before\nthe test project begins together with test analysis and test design.</strong></p>\n<p><strong>d) Is not correct. Acceptance test execution can be performed when there\nis a working product. In sequential SDLC models the working product is\nusually delivered later in the SDLC</strong></p>\n<p><strong>e) Is not correct. Maintenance testing when there is a working and\ndeployed product, which is not done in the early phases of any SDLC.</strong></p>"
  },
  {
   "n": "A8",
   "points": 1,
   "k": "K2",
   "lo": "FL-2.1.4",
   "selectCount": 1,
   "stem": "<p>Which of the following are advantages of DevOps?</p>\n<ul><li>i. Faster product release and faster time to market ii. Increases the need for repetitive manual testing iii. Constant availability of executable software iv. Reduction in the number of regression tests associated with code refactoring v. Setting up the test automation framework is inexpensive since everything is</li></ul>\n<p>automated</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i, ii, iv are advantages"
    },
    {
     "letter": "b",
     "text": "iii, v are advantages"
    },
    {
     "letter": "c",
     "text": "i, iii are advantages"
    },
    {
     "letter": "d",
     "text": "ii, iv, v are advantages"
    }
   ],
   "answer": "c",
   "explanation": "<p>Consider:</p>\n<p><strong>i. Is true. Faster product release and faster time to market is an\nadvantage of DevOps</strong></p>\n<p><strong>ii. Is false. Typically, we need less effort for manual tests because of\nthe use of test automation</strong></p>\n<p><strong>iii. Is true. Constant availability of executable software is an advantage</strong></p>\n<p><strong>iv. Is false. More regression tests are needed</strong></p>\n<p><strong>v. Is false. Not everything is automated and setting up a test\nautomation framework is expensive</strong></p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) It is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": "A9",
   "points": 1,
   "k": "K2",
   "lo": "FL-2.2.2",
   "selectCount": 1,
   "stem": "<p>You work as a tester on a project on a mobile application for food ordering for one of your clients. The client sent you a list of requirements. One of them, with high priority, says</p>\n<p>\"The order must be processed in less than 10 seconds in 95% of the cases\".</p>\n<p>You created a set of test cases in which a number of random orders were made, the processing time measured, and the test results were checked against the requirements.</p>\n<p>What test type did you perform?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Functional, because the test cases cover the user's business requirement for the system"
    },
    {
     "letter": "b",
     "text": "Non-functional, because they measure the system's performance"
    },
    {
     "letter": "c",
     "text": "Functional, because the test cases interact with the user interface"
    },
    {
     "letter": "d",
     "text": "White-box, because we need to know the internal structure of the program to measure the order processing time"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. The fact that the requirement about the system's\nperformance comes directly from the client and that the performance is\nimportant from the business point of view (i.e., high priority) does not\nmake these tests functional, because they do not check \"what\" the\nsystem does, but \"how\" (i.e., how fast the orders are processed)</strong></p>\n<p><strong>b) Is correct. This is an example of testing for performance efficiency, a\ntype of non-functional testing</strong></p>\n<p><strong>c) Is not correct. From the scenario, we do not know if interacting with the\nuser interface is a part of the test conditions. But even if we did, the\nmain test objective of these tests is to check the performance, not the\nusability</strong></p>\n<p><strong>d) Is not correct. We do not need to know the internal structure of the code\nto perform the performance efficiency testing. One can execute\nperformance efficiency tests without structural knowledge</strong></p>"
  },
  {
   "n": "A10",
   "points": 1,
   "k": "K2",
   "lo": "FL-2.3.1",
   "selectCount": 1,
   "stem": "<p>Your organization's test strategy suggests that once a system is going to be retired, data migration shall be tested. As part of what test type is this testing MOST likely to be performed?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Maintenance testing"
    },
    {
     "letter": "b",
     "text": "Regression testing"
    },
    {
     "letter": "c",
     "text": "Reliability testing"
    },
    {
     "letter": "d",
     "text": "Integration testing"
    }
   ],
   "answer": "a",
   "explanation": "<p><strong>a) Is correct. When a system is retired, this can require testing of data\nmigration, which is a form of maintenance testing</strong></p>\n<p><strong>b) Is not correct. Regression testing verifies whether a fix accidentally\naffected the behavior of other parts of the code, but now we are talking\nabout data migration to a new system</strong></p>\n<p><strong>c) Is not correct. Portability testing focuses on transferring the system to\nanother environment</strong></p>\n<p><strong>d) Is not correct. Integration testing focuses on interactions between\ncomponents and/or systems, not on data migration. Also, it is not a test\ntype, but a test level.</strong></p>"
  },
  {
   "n": "A11",
   "points": 1,
   "k": "K2",
   "lo": "FL-3.1.1",
   "selectCount": 1,
   "stem": "<p>The following is a list of the work products produced in the SDLC.</p>\n<ul><li>i. Business requirements ii. Schedule iii. Test budget iv. Third-party executable code v. User stories and their acceptance criteria</li></ul>\n<p>Which of them can be reviewed?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i and iv can be reviewed"
    },
    {
     "letter": "b",
     "text": "i, ii, iii and iv can be reviewed"
    },
    {
     "letter": "c",
     "text": "i, ii, iii, and v can be reviewed"
    },
    {
     "letter": "d",
     "text": "iii, iv, v can be reviewed"
    }
   ],
   "answer": "c",
   "explanation": "<p>Number Answer Only third-party executable code cannot be reviewed. Objective of</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) It is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": "A12",
   "points": 1,
   "k": "K2",
   "lo": "FL-3.1.3",
   "selectCount": 1,
   "stem": "<p>Decide which of the following statements (i-v) are true for static testing.</p>\n<ul><li>i. Abnormal external behaviors are easier to identify with this testing ii. Discrepancies from a coding standard are easier to find with this testing iii. It identifies failures caused by defects when the software is run iv. Its test objective is to identify defects as early as possible v. Missing coverage for critical security requirements is easier to find and fix</li></ul>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i, iv, v are true for static testing"
    },
    {
     "letter": "b",
     "text": "i, iii, iv are true for static testing"
    },
    {
     "letter": "c",
     "text": "ii, iii are true for static testing"
    },
    {
     "letter": "d",
     "text": "ii, iv, v are true for static testing"
    }
   ],
   "answer": "d",
   "explanation": "<p>Consider:\n\ni. These behaviors are easily detectable while the software is running.\n\nHence, dynamic testing shall be used to identify them\n\nii. This is an example of deviations from standards, which is a typical\n\ndefect that is easier found with static testing\n\niii. If the software is executed during the test, it is dynamic testing\n\niv. Identifying defects as early as possible is the test objective of both\n\nstatic testing and dynamic testing\n\nv. This is an example of gaps in the test basis traceability or coverage,\n\nwhich is a typical defect that is easier found with static testing</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is correct</strong></p>"
  },
  {
   "n": "A13",
   "points": 1,
   "k": "K2",
   "lo": "FL-3.2.2",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about formal reviews is TRUE?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Some reviews do not require more than one role"
    },
    {
     "letter": "b",
     "text": "The review process has several activities"
    },
    {
     "letter": "c",
     "text": "Documentation to be reviewed is not distributed before the review meeting, with the exception of the work product for specific review types"
    },
    {
     "letter": "d",
     "text": "Defects found during the review are not reported since they are not found by dynamic testing"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. In all types of reviews there is more than one role, even\n\nin informal ones</strong></p>\n<p><strong>b) Is correct. There are several activities during the formal review process</strong></p>\n<p><strong>c) Is not correct. Documentation to be reviewed should be distributed as\n\nearly as possible</strong></p>\n<p><strong>d) Is not correct. Defects found during the review should be reported</strong></p>"
  },
  {
   "n": "A14",
   "points": 1,
   "k": "K1",
   "lo": "FL-3.2.3",
   "selectCount": 1,
   "stem": "<p>What task may management take on during a formal review?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Taking overall responsibility for the review"
    },
    {
     "letter": "b",
     "text": "Deciding what is to be reviewed"
    },
    {
     "letter": "c",
     "text": "Ensuring the effective running of review meetings, and moderating, if necessary"
    },
    {
     "letter": "d",
     "text": "Recording review information such as review decisions"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. This is the task of the review leader</strong></p>\n<p><strong>b) Is correct. This is the task of the management in a formal review</strong></p>\n<p><strong>c) Is not correct. This is the task of the moderator</strong></p>\n<p><strong>d) Is not correct. This is the task of the scribe</strong></p>"
  },
  {
   "n": "A15",
   "points": 1,
   "k": "K2",
   "lo": "FL-4.2.2",
   "selectCount": 1,
   "stem": "<p>A wine storage system uses a control device that measures the wine cell temperature T (measured in –C, rounded to the nearest degree) and alarms the user if it deviates from the optimal value of 12, according to the following rules:</p>\n<ul><li>if T = 12, the system says, \"optimal temperature\"</li><li>if T &lt; 12, the system says, \"temperature is too low!\"</li><li>if T &gt; 12, the system says, \"temperature is too high!\"</li></ul>\n<p>You want to use the 3-point boundary value analysis (BVA) to verify the behavior of the control device. A test input is a temperature in –C provided by the device.</p>\n<p>What is the MINIMAL set of test inputs that achieves 100% of the desired coverage?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "11, 12, 13"
    },
    {
     "letter": "b",
     "text": "10, 12, 14"
    },
    {
     "letter": "c",
     "text": "10, 11, 12, 13, 14"
    },
    {
     "letter": "d",
     "text": "10, 11, 13, 14"
    }
   ],
   "answer": "c",
   "explanation": "<p>There are three equivalence partitions: {..., 10, 11}, {12}, and {13, 14, ...}.\n\nThe boundary values are 11, 12 and 13. In the three-point boundary value\n\nanalysis for each boundary, we need to test the boundary and both its\n\nneighbors, so:</p>\n<ul><li>for 11 we test 10, 11, 12</li><li>for 12 we test 11, 12, 13</li><li>for 13 we test 12, 13, 14\n\nAltogether we need to test 10, 11, 12, 13, and 14</li></ul>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is not correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": "A16",
   "points": 1,
   "k": "K2",
   "lo": "FL-4.3.2",
   "selectCount": 1,
   "stem": "<p>Which of the following statements about branch testing is CORRECT?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "If a program includes only unconditional branches, then 100% branch coverage can be achieved without executing any test cases"
    },
    {
     "letter": "b",
     "text": "If the test cases exercise all unconditional branches in the code, then 100% branch coverage is achieved"
    },
    {
     "letter": "c",
     "text": "If 100% statement coverage is achieved, then 100% branch coverage is also achieved"
    },
    {
     "letter": "d",
     "text": "If 100% branch coverage is achieved, then all decision outcomes in each decision statement in the code are exercised"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. In this case one test case is still needed since there is at\n\nleast one (unconditional) branch to be covered</strong></p>\n<p><strong>b) Is not correct. Covering only unconditional branches does not imply\n\ncovering all conditional branches</strong></p>\n<p><strong>c) Is not correct. 100% branch coverage implies 100% statement\n\ncoverage, not otherwise. For example, for an IF decision without the\nELSE, one test is enough to achieve 100% statement coverage, but it\nonly achieves 50% branch coverage</strong></p>\n<p><strong>d) Is correct. Each decision outcome corresponds to a conditional branch,\nso 100% branch coverage implies 100% coverage of the decision\noutcomes</strong></p>"
  },
  {
   "n": "A17",
   "points": 1,
   "k": "K2",
   "lo": "FL-4.4.3",
   "selectCount": 1,
   "stem": "<p>You are testing a mobile application that allows customers to access and manage their bank accounts. You are running a test suite that involves evaluating each screen, and each field on each screen, against a general list of user interface best practices derived from a popular book on the topic that maximizes usability for such applications. Which of the following options BEST categorizes the test technique you are using?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Black-box"
    },
    {
     "letter": "b",
     "text": "Exploratory"
    },
    {
     "letter": "c",
     "text": "Checklist-based"
    },
    {
     "letter": "d",
     "text": "Error guessing"
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. The book provides general guidance, and is not a formal\nrequirements document, a specification, or a set of use cases, user\nstories, or business processes</strong></p>\n<p><strong>b) Is not correct. While you could consider the list as a set of test charters,\nit more closely resembles the list of test conditions to be checked</strong></p>\n<p><strong>c) Is correct. The list of user interface best practices is the list of test\nconditions to be systematically checked</strong></p>\n<p><strong>d) Is not correct. The tests are not focused on failures that could occur, but\nrather on knowledge about what is important for the user, in terms of\nusability</strong></p>"
  },
  {
   "n": "A18",
   "points": 1,
   "k": "K2",
   "lo": "FL-4.5.1",
   "selectCount": 1,
   "stem": "<p>Which of the following BEST describe the collaborative approach to user story writing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "User stories are created by testers and developers and then accepted by business representatives"
    },
    {
     "letter": "b",
     "text": "User stories are created by business representatives, developers, and testers together"
    },
    {
     "letter": "c",
     "text": "User stories are created by business representatives and verified by developers and testers"
    },
    {
     "letter": "d",
     "text": "User stories are created in a way that they are independent, negotiable, valuable, estimable, small, and testable"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. Collaborative user story writing means that all\nstakeholders create the user stories collaboratively, to obtain the\nshared vision</strong></p>\n<p><strong>b) Is correct. Collaborative user story writing means that all stakeholders\ncreate the user stories collaboratively, to obtain the shared vision</strong></p>\n<p><strong>c) Is not correct. Collaborative user story writing means that all\nstakeholders create the user stories collaboratively, to obtain the\nshared vision</strong></p>\n<p><strong>d) Is not correct. This is the list of properties that each user story should\nhave, not the description of the collaboration-based approach</strong></p>"
  },
  {
   "n": "A19",
   "points": 1,
   "k": "K2",
   "lo": "FL-5.1.1",
   "selectCount": 1,
   "stem": "<p>Consider the following part of a test plan.</p>\n<p>Testing will be performed using component testing and component integration testing. The regulations require to demonstrate that 100% branch coverage is achieved for each component classified as critical.</p>\n<p>Which part of the test plan does this part belong to?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Communication"
    },
    {
     "letter": "b",
     "text": "Risk register"
    },
    {
     "letter": "c",
     "text": "Context of testing"
    },
    {
     "letter": "d",
     "text": "Test approach"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. The paragraph contains information on test levels and\nexit criteria, which are part of the test approach</strong></p>\n<p><strong>b) Is not correct. The paragraph contains information on test levels and\nexit criteria, which are part of the test approach</strong></p>\n<p><strong>c) Is not correct. The paragraph contains information on test levels and\nexit criteria, which are part of the test approach</strong></p>\n<p><strong>d) Is correct. The paragraph contains information on test levels and exit\ncriteria, which are part of the test approach</strong></p>"
  },
  {
   "n": "A20",
   "points": 1,
   "k": "K3",
   "lo": "FL-5.1.4",
   "selectCount": 1,
   "stem": "<p>Your team uses planning poker to estimate the test effort for a newly required feature. There is a rule in your team that if there is no time to reach full agreement and the variation in the results is small, rules like \"accept the number with the most votes\" can be applied.</p>\n<p>After two rounds, the consensus was not reached, so the third round was initiated. You can see the test estimation results in the table below.</p>\n<p>Which of the following is the BEST example of the next step?</p>",
   "exhibit": "<div class=\"exhibit\"><table>\n<thead><tr><th></th><th colspan=\"7\">Team members' estimations</th></tr></thead>\n<tbody>\n<tr><td>Round 1</td><td>21</td><td>2</td><td>5</td><td>34</td><td>13</td><td>8</td><td>2</td></tr>\n<tr><td>Round 2</td><td>13</td><td>8</td><td>8</td><td>34</td><td>13</td><td>8</td><td>5</td></tr>\n<tr><td>Round 3</td><td>13</td><td>8</td><td>13</td><td>13</td><td>13</td><td>13</td><td>8</td></tr>\n</tbody></table></div>",
   "options": [
    {
     "letter": "a",
     "text": "The product owner has to step in and make a final decision"
    },
    {
     "letter": "b",
     "text": "Accept 13 as the final test estimate as this has most of the votes"
    },
    {
     "letter": "c",
     "text": "No further action is needed. Consensus has been reached"
    },
    {
     "letter": "d",
     "text": "Remove the new feature from the current release because consensus has not been reached"
    }
   ],
   "answer": "b",
   "explanation": "<p><strong>a) Is not correct. This should be a team activity and not overruled by one\nteam member</strong></p>\n<p><strong>b) Is correct. If test estimates are not the same, but the variation in the\nresults is small, applying rules like \"accept the number with the most\nvotes\" can be applied</strong></p>\n<p><strong>c) Is not correct. There is no consensus yet as some say 13, others say 8</strong></p>\n<p><strong>d) Is not correct. A feature should not be removed only because the team</strong></p>"
  },
  {
   "n": "A21",
   "points": 1,
   "k": "K1",
   "lo": "FL-5.1.6",
   "selectCount": 1,
   "stem": "<p>Which of the following is TRUE regarding the test pyramid?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It emphasizes having far more tests at the lower test levels"
    },
    {
     "letter": "b",
     "text": "It suggests that each low-level test checks a large part of the functionality"
    },
    {
     "letter": "c",
     "text": "It describes distribution of test types across the SDLC"
    },
    {
     "letter": "d",
     "text": "It has no impact on the construction of automated tests"
    }
   ],
   "answer": "a",
   "explanation": "<p>cannot agree on the test estimates</p>\n<p><strong>a) Is correct. The test pyramid emphasizes having a larger number of tests\n\nat the lower test levels</strong></p>\n<p><strong>b) Is not correct. It is not true that a test on a lower level tests a larger\n\npiece of functionality. Tests are more atomic and oriented on a specific\nlogic, so it is the opposite</strong></p>\n<p><strong>c) Is not correct. Test pyramid shows how the number of tests is\ndistributed across test levels</strong></p>\n<p><strong>d) Is not correct. The test pyramid model supports the team in test\nautomation</strong></p>"
  },
  {
   "n": "A22",
   "points": 1,
   "k": "K1",
   "lo": "FL-5.2.1",
   "selectCount": 1,
   "stem": "<p>During risk analysis the team considered the following risk: \"The system allows too high a discount for a customer\". The team estimated the risk impact to be very high.</p>\n<p>What can one say about the risk likelihood?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "It is also very high. High risk impact always implies high risk likelihood"
    },
    {
     "letter": "b",
     "text": "It is very low. High risk impact always implies low risk likelihood"
    },
    {
     "letter": "c",
     "text": "One cannot say anything about risk likelihood. Risk impact and risk likelihood are independent."
    },
    {
     "letter": "d",
     "text": "Risk likelihood is not important with such a high-risk impact. One does not need to define it."
    }
   ],
   "answer": "c",
   "explanation": "<p><strong>a) Is not correct. Risk impact and risk likelihood are independent</strong></p>\n<p><strong>b) Is not correct. Risk impact and risk likelihood are independent</strong></p>\n<p><strong>c) Is correct. Risk impact and risk likelihood are independent</strong></p>\n<p><strong>d) Is not correct. We need both factors to calculate risk level</strong></p>"
  },
  {
   "n": "A23",
   "points": 1,
   "k": "K2",
   "lo": "FL-5.2.2",
   "selectCount": 1,
   "stem": "<p>The following list contains risks that have been identified for a new software product to be developed:</p>\n<ul><li>i. Management moves two experienced testers to another project ii. The system does not comply with security standards iii. System response time exceeds user requirements iv. Stakeholders have inaccurate expectations v. Disabled people have problems when using the system</li></ul>\n<p>Which of them are project risks?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "i, iv are project risks"
    },
    {
     "letter": "b",
     "text": "iv, v are project risks"
    },
    {
     "letter": "c",
     "text": "i, iii are project risks"
    },
    {
     "letter": "d",
     "text": "ii, v are project risks"
    }
   ],
   "answer": "a",
   "explanation": "<p>Consider:\ni. It is a Project risk\nii. It is a Product risk\niii. It is a Product risk\niv. It is a Project risk\nv. It is a Product risk</p>\n<p><strong>Thus:</strong></p>\n<p><strong>a) Is correct</strong></p>\n<p><strong>b) Is not correct</strong></p>\n<p><strong>c) Is not correct</strong></p>\n<p><strong>d) Is not correct</strong></p>"
  },
  {
   "n": "A24",
   "points": 1,
   "k": "K2",
   "lo": "FL-5.2.3",
   "selectCount": 1,
   "stem": "<p>Which of the following is an example of how product risk analysis influences thoroughness and scope of testing?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "The test manager monitors and reports the level of all known risks on a daily basis so the stakeholders can make an informed decision on the release date"
    },
    {
     "letter": "b",
     "text": "One of the identified risks was \"Lack of support of open-source databases\", so the team decided to integrate the system with an open-source database"
    },
    {
     "letter": "c",
     "text": "During the quantitative risk analysis, the team estimated the total level of all identified risks and reported it as the total residual risk before testing"
    },
    {
     "letter": "d",
     "text": "Risk assessment revealed a very high level of performance risks, so it was decided to perform detailed performance efficiency testing early in the SDLC"
    }
   ],
   "answer": "d",
   "explanation": "<p><strong>a) Is not correct. This is an example of a risk monitoring activity, not risk\n\nanalysis</strong></p>\n<p><strong>b) Is not correct. This is an example of an architectural decision, not\n\nrelated with testing</strong></p>\n<p><strong>c) Is not correct. This is an example of performing a quantitative risk\n\nanalysis and is not related to thoroughness or scope of testing</strong></p>\n<p><strong>d) Is correct. This shows how risk analysis impacts the thoroughness of</strong></p>"
  },
  {
   "n": "A25",
   "points": 1,
   "k": "K1",
   "lo": "FL-5.3.1",
   "selectCount": 2,
   "stem": "<p>Which TWO of the following options are common metrics used for reporting on the quality level of the test object?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Number of defects found during system testing"
    },
    {
     "letter": "b",
     "text": "Total effort on test design divided by the number of designed test cases"
    },
    {
     "letter": "c",
     "text": "Number of executed test procedures"
    },
    {
     "letter": "d",
     "text": "Number of defects found divided by the size of a work product"
    },
    {
     "letter": "e",
     "text": "Time needed to repair a defect"
    }
   ],
   "answer": [
    "a",
    "d"
   ],
   "explanation": "<p>testing (i.e., the level of detail)</p>\n<p><strong>a) Is correct. The number of defects found is related to the test object\nquality</strong></p>\n<p><strong>b) Is not correct. This is the measure of the test efficiency not the test\nobject quality</strong></p>\n<p><strong>c) Is not correct. The number of test cases executed does not tell us\nanything about the quality; test results might do</strong></p>\n<p><strong>d) Is correct. defect density is related to the test object quality</strong></p>\n<p><strong>e) Is not correct. Time to repair is a process metric. It does not tell us</strong></p>"
  },
  {
   "n": "A26",
   "points": 1,
   "k": "K2",
   "lo": "FL-5.3.2",
   "selectCount": 1,
   "stem": "<p>Which of the following pieces of information contained in a test progress report is the LEAST useful for business representatives?</p>",
   "exhibit": null,
   "options": [
    {
     "letter": "a",
     "text": "Impediments to testing"
    },
    {
     "letter": "b",
     "text": "Branch coverage achieved"
    },
    {
     "letter": "c",
     "text": "Test progress"
    },
    {
     "letter": "d",
     "text": "New risks within the test cycle"
    }
   ],
   "answer": "b",
   "explanation": "<p>anything about the product quality</p>\n<p><strong>a) Is not correct. Impediments to testing can be high-level and business-\n\nrelated, so this is an important piece of information for business\nstakeholders</strong></p>\n<p><strong>b) Is correct. Branch testing is a technical metric used by developers and\ntechnical test analysts. This information is of no interest to business\nrepresentatives</strong></p>\n<p><strong>c) Is not correct. Test progress is project related, so it may be useful for\nbusiness representatives</strong></p>\n<p><strong>d) Is not correct. Risks impact product quality, so it may be useful for\nbusiness representatives</strong></p>"
  }
 ]
};
