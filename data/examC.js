// ISTQB CTFL v4.0 Sample Exam C — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.C = {
  id: "C",
  title: "ISTQB CTFL 4.0 — Sample Exam C",
  questions: [
    {
      n: 1,
      points: 1,
      k: "K1",
      lo: "FL-1.1.1",
      selectCount: 1,
      stem: "<p>Which of the following is a typical test objective?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Validating that documented requirements are met" },
        { letter: "b", text: "Causing failures and identifying defects" },
        { letter: "c", text: "Initiating errors and identifying root causes" },
        { letter: "d", text: "Verifying the test object meets user expectations" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Validating that documented requirements are met is incorrect as validation is concerned with meeting user requirements and expectations, while verification is concerned with meeting specified requirements, so this would be correct if we replaced 'validating' with 'verifying'</p><p>b) Is correct. Causing failures and identifying defects is probably the most common objective of dynamic testing</p><p>c) Is not correct. Initiating errors and identifying root causes is incorrect because testers do not initiate errors, they try to cause failures. Errors are typically made by developers (and cannot really be initiated) and result in defects, which testers attempt to identify either directly through static testing or indirectly through failures with dynamic testing. Identifying root causes is useful but is part of debugging, which is a separate activity from testing</p><p>d) Is not correct. Verifying the test object meets user expectations is incorrect as verification is concerned with checking specified (documented) requirements are met, while validation is concerned with meeting user requirements and expectations, so this would be correct if we replaced 'verifying' with 'validating'</p>"
    },
    {
      n: 2,
      points: 1,
      k: "K2",
      lo: "FL-1.1.2",
      selectCount: 1,
      stem: "<p>Which of the following statements BEST describes the difference between testing and debugging?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Testing causes failures while debugging fixes failures" },
        { letter: "b", text: "Testing is a negative activity while debugging is a positive activity" },
        { letter: "c", text: "Testing determines that defects exist while debugging removes defects" },
        { letter: "d", text: "Testing finds the cause of defects while debugging fixes the cause of defects" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. Dynamic testing does cause failures (from which defects can then be located and fixed). However, debugging is concerned with locating defects and fixing these defects. Therefore, debugging does not fix failures</p><p>b) Is not correct. Both testing and debugging contribute to improving the quality of the test object, so both should be considered positively. Debugging is generally considered to be a positive activity as it is fixing something. Dynamic testing does involve intentionally causing the test object to fail, which is why some people consider it a negative activity, but that is a very narrow view (and not one typically held by testers). Both positive and negative test cases are possible. Positive test cases check that the test object correctly performs what it is supposed to do, while negative testing checks that the test object does not do what it is not supposed to do</p><p>c) Is correct. Testing determines that defects exist either directly through observation of the defect in reviews (or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging is a separate activity from testing (normally performed by developers) and is concerned with locating defects (only for dynamic testing) and fixing the defects</p><p>d) Is not correct. The causes of defects are typically human errors. Testing finds defects either directly through static testing, or indirectly by causing failures in dynamic testing, and debugging fixes defects. So, testing does not find the cause of defects and debugging does not fix the causes of defects</p>"
    },
    {
      n: 3,
      points: 1,
      k: "K2",
      lo: "FL-1.3.1",
      selectCount: 1,
      stem: "<p>The 'absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Explaining that it is not possible for testing to show the absence of defects" },
        { letter: "b", text: "Supporting the end users to perform acceptance testing" },
        { letter: "c", text: "Ensuring that no implementation defects remain in the delivered system" },
        { letter: "d", text: "Modifying tests that cause no failures to ensure few defects remain" }
      ],
      answer: "b",
      explanation: "<p>The 'absence-of-defects fallacy' is concerned with the idea that ensuring correctness in accordance with the requirements (i.e., verifying the absence of implementation defects) does not guarantee user satisfaction with the system. To address this it is also necessary to validate that the system meets users' needs and expectations, fulfills business objectives, and outperforms competing systems.</p><p>a) Is not correct. The 'testing shows the presence, not the absence of defects' principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. Therefore, explaining that it is not possible for testing to show the absence of defects would partially address this principle, not the 'absence-of-defects' fallacy</p><p>b) Is correct. By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users' needs and expectations</p><p>c) Is not correct. It is not possible to ensure that no implementation defects remain in the delivered system as the 'testing shows the presence, not the absence of defects' principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness</p><p>d) Is not correct. Modifying tests that cause no failures to ensure few defects remain is one way to address the 'tests wear out' principle. This principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. This will not validate that the system meets users' needs and expectations</p>"
    },
    {
      n: 4,
      points: 1,
      k: "K2",
      lo: "FL-1.4.1",
      selectCount: 2,
      stem: "<p>Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Test implementation" },
        { letter: "b", text: "Test design" },
        { letter: "c", text: "Test execution" },
        { letter: "d", text: "Test monitoring" },
        { letter: "e", text: "Test analysis" }
      ],
      answer: ["b", "e"],
      explanation: "<p>Given the following description of test analysis: To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. The systematic identification of test conditions as coverage items often involves using test techniques both during test analysis and as part of the test design activity. From the above description, it can be seen that test techniques are often used in the test analysis and test design activities. Boundary value analysis and equivalence partitioning are test techniques.</p><p>a) Is not correct. Test implementation is not likely to involve the use of test techniques as it is mostly concerned with assembling test cases into test procedures, while test techniques create test cases</p><p>b) Is correct. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items</p><p>c) Is not correct. Test execution is not likely to involve the use of test techniques as it is mostly concerned with executing test procedures (and so test cases), while test techniques create test cases</p><p>d) Is not correct. Test monitoring is not likely to involve the use of test techniques. Test monitoring is mostly concerned with ongoing checks to ensure the plan is being followed, while test techniques create test cases</p><p>e) Is correct. Test analysis is likely to involve the use of test techniques to identify test conditions</p>"
    },
    {
      n: 5,
      points: 1,
      k: "K2",
      lo: "FL-1.4.3",
      selectCount: 1,
      stem: "<p>Given the following testware:</p><ul><li>1. Coverage items</li><li>2. Change requests</li><li>3. Test execution schedule</li><li>4. Prioritized test conditions</li></ul><p>And the following test activities:</p><ul><li>A. Test analysis</li><li>B. Test design</li><li>C. Test implementation</li><li>D. Test completion</li></ul><p>Which of the following BEST shows the testware produced by the activities?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "1B, 2D, 3C, 4A" },
        { letter: "b", text: "1B, 2D, 3A, 4C" },
        { letter: "c", text: "1D, 2C, 3A, 4B" },
        { letter: "d", text: "1D, 2C, 3B, 4A" }
      ],
      answer: "a",
      explanation: "<p>Considering each of the listed test activities and their output testware:</p><ul><li>A. Test analysis – prioritized test conditions (4) (e.g., acceptance criteria), and defect reports for defects identified in the test basis</li><li>B. Test design – prioritized test cases, test charters, coverage items (1), test data requirements, and test environment requirements</li><li>C. Test implementation – test procedures, automated test scripts, test suites, test data, test execution schedule (3), and test environment elements such as stubs, drivers, simulators, and service virtualizations</li><li>D. Test completion – test completion report, documented lessons learned, action items for improvement, and change requests (2) (as product backlog items)</li></ul><p>Thus:</p><p>a) Is correct. The correct match is: 1B, 2D, 3C, 4A</p><p>b) Is not correct</p><p>c) Is not correct</p><p>d) Is not correct</p>"
    },
    {
      n: 6,
      points: 1,
      k: "K2",
      lo: "FL-1.4.5",
      selectCount: 1,
      stem: "<p>Which of the following statements about the different testing roles is MOST likely to be CORRECT?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team" },
        { letter: "b", text: "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion" },
        { letter: "c", text: "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself" },
        { letter: "d", text: "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. Although it is correct to say that in Agile software development, some of the test management tasks may be handled by the Agile team itself, the testing role is not primarily the responsibility of a single individual from outside the team. Instead the testing is more likely to be performed by various team members following the whole-team approach</p><p>b) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. So, although this statement is partially correct, it is wrong to say that the testing role is primarily responsible for test monitoring and test control</p><p>c) Is correct. In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the development team may perform these tasks</p><p>d) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion, while the testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Thus the test management role is not normally responsible for test analysis and test design, although it is correct to say that the testing role is primarily responsible for test implementation and test execution</p>"
    },
    {
      n: 7,
      points: 1,
      k: "K1",
      lo: "FL-1.5.2",
      selectCount: 1,
      stem: "<p>Which of the following is an advantage of the whole-team approach?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Teams with no testers" },
        { letter: "b", text: "Improved team dynamics" },
        { letter: "c", text: "Specialist team members" },
        { letter: "d", text: "Larger team sizes" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. In the whole-team approach, testers play a vital role by sharing their testing expertise with the team and guiding product development. They collaborate with other team members to achieve the desired quality levels and work with business representatives to create acceptance tests. Testers also partner with developers to determine the optimal test strategy and test automation approaches</p><p>b) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project</p><p>c) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, thus specialist team members are not an advantage of this approach</p><p>d) Is not correct. There is no specific guidance on the optimum size of teams using the whole-team approach, and there is no suggestion that larger teams are better</p>"
    },
    {
      n: 8,
      points: 1,
      k: "K2",
      lo: "FL-1.5.3",
      selectCount: 1,
      stem: "<p>Which of the following statements about the independence of testing is CORRECT?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers" },
        { letter: "b", text: "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers" },
        { letter: "c", text: "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain" },
        { letter: "d", text: "Testers from outside the developer's team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process</p><p>b) Is not correct. A developer's familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects</p><p>c) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized, with developers performing component testing and component integration testing, the test team performing system testing and system integration testing, and business representatives performing acceptance testing. So, testers can be in the developer's team and do not need to come from outside the organization. Knowledge of the application domain will change from case to case and is not dependent on the level of independence</p><p>d) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization, with testers from outside the developer's team generally more independent than testers from within the team. However, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blamed for delays in product release</p>"
    },
    {
      n: 9,
      points: 1,
      k: "K1",
      lo: "FL-2.1.2",
      selectCount: 1,
      stem: "<p>Which of the following is a good testing practice that applies to all software development lifecycles?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "For each test level, there is a corresponding development level" },
        { letter: "b", text: "For each test objective, there is a corresponding development objective" },
        { letter: "c", text: "For every test activity, there is a corresponding user activity" },
        { letter: "d", text: "For every development activity, there is a corresponding test activity" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, here we are attempting to equate test levels with development levels, and, although we know what is meant by 'test levels', there is no common understanding of the term 'development level'</p><p>b) Is not correct. Every software development activity has a corresponding test activity; however test objectives are quite different. For instance, there might be a test objective of ensuring that a test object adheres to a contractual requirement that a certain type of testing must be performed before delivery. In this case there is no reason for there to be a corresponding development objective</p><p>c) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to testing and user activities. For instance, for some systems it is difficult to even identify the end users. Also, some test activities are focused on developers (e.g., testing for ease of maintainability), which has no user aspect to it</p><p>d) Is correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity</p>"
    },
    {
      n: 10,
      points: 1,
      k: "K1",
      lo: "FL-2.1.3",
      selectCount: 1,
      stem: "<p>Which of the following is an example of a test-first approach to development?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Component Test-Driven Development" },
        { letter: "b", text: "Integration Test-Driven Development" },
        { letter: "c", text: "System Test-Driven Development" },
        { letter: "d", text: "Acceptance Test-Driven Development" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Component Test-Driven Development is not a correct example of a test-first approach to development</p><p>b) Is not correct. Integration Test-Driven Development is not a correct example of a test-first approach to development</p><p>c) Is not correct. System Test-Driven Development is not a correct example of a test-first approach to development</p><p>d) Is correct. Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach to development</p>"
    },    {
      n: 11,
      points: 1,
      k: "K2",
      lo: "FL-2.1.5",
      selectCount: 1,
      stem: "<p>Which of the following provides the BEST description of shift-left?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of 'early testing saves time and money'" },
        { letter: "b", text: "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC" },
        { letter: "c", text: "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests" },
        { letter: "d", text: "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Practices involved in shift left are aimed at implementing more test activities in the early phases of the software development life cycle (SDLC), portraying the SDLC as moving from left to right. There is no such thing as the left-hand side of the test process</p><p>b) Is correct. Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, overall savings should be higher</p><p>c) Is not correct. Although automated component tests and component integration tests for regression testing are generally valuable, the creation of these tests is normally the responsibility of the developers, and if a continuous integration/continuous delivery (CI/CD) approach is followed, then these tests will have been submitted with the code. In some situations the tester may automate tests for regression testing, and sometimes even for component tests and component integration tests, however this is not part of shift left which moves testing earlier in the SDLC</p><p>d) Is not correct. Training testers to perform tasks early in the SDLC would support a shift left approach by emphasizing the importance of starting testing earlier in the SDLC. However, automating more test activities to be performed later in the SDLC is not part of shift-left</p>"
    },
    {
      n: 12,
      points: 1,
      k: "K2",
      lo: "FL-2.1.6",
      selectCount: 1,
      stem: "<p>Which of the following is LEAST likely to occur as a result of a retrospective?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The quality of future test objects improves by identifying improvements in development practices" },
        { letter: "b", text: "Test efficiency improves by speeding up the configuration of test environments through automation" },
        { letter: "c", text: "End users' understanding of the development and test processes is improved" },
        { letter: "d", text: "Automated test scripts are enhanced through feedback from developers" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. One of the purposes of retrospectives is to identify potential process improvements, which, if put into practice, should result in the quality of future outputs of the development process (test objects) being higher. So, this is likely to occur as a result of a retrospective</p><p>b) Is not correct. A benefit of retrospectives for testing includes increased test efficiency through process improvements. So, this is likely to occur as a result of a retrospective</p><p>c) Is correct. Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives</p><p>d) Is not correct. A benefit of retrospectives for testing includes improved quality of testware (including automated test scripts) through joint reviews with developers. So, this is likely to occur as a result of a retrospective</p>"
    },
    {
      n: 13,
      points: 1,
      k: "K2",
      lo: "FL-2.2.1",
      selectCount: 1,
      stem: "<p>Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Component testing" },
        { letter: "b", text: "Component integration testing" },
        { letter: "c", text: "System integration testing" },
        { letter: "d", text: "Acceptance testing" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Component testing (also called unit testing) involves testing individual components in isolation and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing in their development environment</p><p>b) Is not correct. Component integration testing involves testing the interfaces and interactions between components and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing</p><p>c) Is not correct. System integration testing examines the interfaces with other systems and external services and is mostly verification against a specification, rather than validation against user needs. This type of testing is also most often performed by testers</p><p>d) Is correct. Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users</p>"
    },
    {
      n: 14,
      points: 1,
      k: "K2",
      lo: "FL-2.2.3",
      selectCount: 1,
      stem: "<p>The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Only confirmation testing" },
        { letter: "b", text: "Confirmation testing then regression testing" },
        { letter: "c", text: "Only regression testing" },
        { letter: "d", text: "Regression testing then confirmation testing" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Confirmation testing to check that the updates have resulted in a correct implementation is necessary, however, it would then be sensible to perform regression testing to ensure that no defects have been introduced or uncovered in unchanged areas of the system</p><p>b) Is correct. Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system</p><p>c) Is not correct. Regression testing should be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system when the update was made, however it is also necessary to perform confirmation testing that will check that the updates have resulted in a correct implementation</p><p>d) Is not correct. Confirmation testing will check that the updates have resulted in a correct implementation, and regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. However, when performed (i.e., when an update needs to be tested), confirmation testing precedes regression testing</p>"
    },
    {
      n: 15,
      points: 1,
      k: "K2",
      lo: "FL-3.1.3",
      selectCount: 1,
      stem: "<p>Given the following example defects:</p><ul><li>i. Two different parts of the design specification disagree due to the complexity of the design</li><li>ii. A response time is too long and so makes users lose patience</li><li>iii. A path in the code cannot be reached during execution</li><li>iv. A variable is declared but never subsequently used in the program</li><li>v. The amount of memory needed by the program to generate a report is too high</li></ul><p>Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "ii, v" },
        { letter: "b", text: "iii, v" },
        { letter: "c", text: "i, ii, iv" },
        { letter: "d", text: "i, iii, iv" }
      ],
      answer: "d",
      explanation: "<p>Considering each of the listed example defects:</p><ul><li>i. Two different parts of the design specification disagree due to the complexity of the design – this is an example of a specification defect, which includes inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and duplications, which can most easily be found by static testing</li><li>ii. A response time is too long and so makes users lose patience – this is an example of a response time defect, which can only be detected in practice by executing the program and measuring the response time, which can most easily be found by dynamic testing</li><li>iii. A path in the code cannot be reached during execution - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing</li><li>iv. A variable is declared but never subsequently used in the program - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing</li><li>v. The amount of memory needed by the program to generate a report is too high – this is an example of a performance defect, which can only be detected in practice by executing the program and measuring the memory used, which can most easily be found by dynamic testing</li></ul><p>Thus:</p><p>a) Is not correct</p><p>b) Is not correct</p><p>c) Is not correct</p><p>d) Is correct. The correct match for static testing is i, iii, and iv</p>"
    },
    {
      n: 16,
      points: 1,
      k: "K1",
      lo: "FL-3.2.1",
      selectCount: 1,
      stem: "<p>Which of the following is a benefit of early and frequent stakeholder feedback?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Changes to requirements are understood and implemented earlier" },
        { letter: "b", text: "It ensures business stakeholders understand user requirements" },
        { letter: "c", text: "It allows product owners to change their requirements as often as they want" },
        { letter: "d", text: "End users are told which requirements will not be implemented prior to release" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner</p><p>b) Is not correct. The feedback is from stakeholders, so providing feedback is unlikely to improve their understanding of their own user requirements</p><p>c) Is not correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner. However, because changes in requirements can be understood and implemented sooner, it does not mean that unlimited changes to requirements are encouraged</p><p>d) Is not correct. The feedback is from stakeholders and does not cover communication to them. Communications with end users could include telling them about which requirements will not be implemented prior to release, but ideally this should not happen at all</p>"
    },
    {
      n: 17,
      points: 1,
      k: "K2",
      lo: "FL-3.2.4",
      selectCount: 1,
      stem: "<p>Given the following review types:</p><ul><li>1. Technical review</li><li>2. Informal review</li><li>3. Inspection</li><li>4. Walkthrough</li></ul><p>And the following descriptions:</p><ul><li>A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve</li><li>B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects</li><li>C. The main objective is detecting potential defects and it requires metrics collection to support process improvement</li><li>D. The main objective is detecting potential defects and it generates no formal documented output</li></ul><p>Which of the following BEST matches the review types and the descriptions?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "1A, 2B, 3C, 4D" },
        { letter: "b", text: "1A, 2D, 3C, 4B" },
        { letter: "c", text: "1B, 2C, 3D, 4A" },
        { letter: "d", text: "1C, 2D, 3A, 4B" }
      ],
      answer: "b",
      explanation: "<p>Considering each of the listed review types:</p><ul><li>1. Technical review - This type of review is performed by technically qualified reviewers and led by a moderator. The objectives are to gain consensus and make decisions on technical problems while also evaluating quality and building confidence in the work product, generating new ideas, motivating and enabling authors to improve, and detecting anomalies</li><li>2. Informal review - The main objective is to detect anomalies. The process is not defined and does not require formal documented output</li><li>3. Inspection - This is the most formal review type, and it follows the complete generic review process. The primary objective is to find the most anomalies, and other objectives include evaluating quality and building confidence in the work product, motivating and enabling authors to improve, and collecting metrics that can be used to enhance the software development lifecycle (SDLC), including the inspection process. The author cannot act as the review leader or scribe</li><li>4. Walkthrough - Led by the author, this type of review serves various objectives such as evaluating quality and building confidence in the work product, educating reviewers, gaining consensus, generating new ideas, motivating and enabling authors to improve, and detecting anomalies. Reviewers might perform an individual review before the walkthrough, but this is not mandatory</li></ul><p>A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve</p><p>B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting anomalies</p><p>C. The main objective is detecting anomalies and it requires metrics collection to support process improvement</p><p>D. The main objective is detecting anomalies and it generates no formal documented output</p><p>Thus:</p><p>a) Is not correct</p><p>b) Is correct.</p><p>c) Is not correct</p><p>d) Is not correct</p>"
    },
    {
      n: 18,
      points: 1,
      k: "K1",
      lo: "FL-3.2.5",
      selectCount: 1,
      stem: "<p>Which of the following is a factor that contributes to a successful review?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Ensure management participate as reviewers" },
        { letter: "b", text: "Split large work products into smaller parts" },
        { letter: "c", text: "Set reviewer evaluation as an objective" },
        { letter: "d", text: "Plan to cover one document per review" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. To ensure successful reviews, it is important to secure management's support for the review process. However that does not mean that they should participate as reviewers</p><p>b) Is correct. To ensure successful reviews, it's important to break the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during individual reviews or review meetings</p><p>c) Is not correct. To ensure successful reviews, it's important to clearly define objectives and measurable exit criteria, without evaluating participants</p><p>d) Is not correct. To ensure successful reviews, it's important to break down the review into smaller chunks to prevent reviewers from losing focus during individual reviews or review meetings. So you should not plan to cover one document per review</p>"
    },
    {
      n: 19,
      points: 1,
      k: "K2",
      lo: "FL-4.1.1",
      selectCount: 1,
      stem: "<p>What is the MAIN difference between black-box test techniques and experience-based test techniques?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The test object" },
        { letter: "b", text: "The test level at which the test technique is used" },
        { letter: "c", text: "The test basis" },
        { letter: "d", text: "The software development lifecycle (SDLC) in which the test technique can be used" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. In most cases both black-box test techniques and experience-based test techniques can be used for the same test objects</p><p>b) Is not correct. Both black-box test techniques and experience-based test techniques can be used at all test levels</p><p>c) Is correct. Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may not use the specification at all</p><p>d) Is not correct. Experience-based test techniques can detect defects that may be missed using black-box (and white-box) test techniques. Hence, experience-based test techniques are complementary to black-box test techniques and white-box test techniques and both black-box test techniques and experience-based test techniques can be used in all SDLCs</p>"
    },
    {
      n: 20,
      points: 1,
      k: "K3",
      lo: "FL-4.2.1",
      selectCount: 1,
      stem: "<p>You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions:</p><p>Variable: PIN code length</p><ul><li>The partition \"length correct\" – four-digit PINs</li><li>The partition \"length incorrect\" – PINs with length other than 4</li></ul><p>Variable: Number of different digits</p><ul><li>The partition \"number of different digits correct\" – PINs with at least two different digits</li><li>The partition \"number of different digits incorrect\" – PINs with all digits being the same</li></ul><p>Which of the following is the BEST set of input test data to cover the identified equivalence partitions?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "12, 1111, 1234, 12345" },
        { letter: "b", text: "1, 123, 1111, 1234" },
        { letter: "c", text: "11, 12, 1111, 12345" },
        { letter: "d", text: "123, 1222, 12345" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct.</p><ul><li>Value \"12\" covers \"length incorrect, too few digits\"</li><li>Value \"1111\" covers \"length correct\" and \"number of different digits incorrect\"</li><li>Value \"1234\" again covers \"length correct\" and \"number of different digits correct\"</li><li>Value \"12345\" covers \"length incorrect, too many digits\"</li></ul><p>b) Is not correct. All partitions are covered, however it only covers the lower side of \"length incorrect\"</p><p>c) Is not correct. There are no value covering \"correct PIN\"</p><p>d) Is not correct. There are no value covering \"number of different digits\"</p>"
    },    {
      n: 21,
      points: 1,
      k: "K3",
      lo: "FL-4.2.2",
      selectCount: 1,
      stem: "<p>A developer was asked to implement the following business rule:</p><pre>INPUT: value (integer number)\n\nIF (value ≤ 100 OR value ≥ 200) THEN write \"value incorrect\"\n\nELSE write \"value OK\"</pre><p>You design the test cases using 2-value boundary value analysis.</p><p>Which of the following sets of test inputs achieves the greatest coverage?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "100, 150, 200, 201" },
        { letter: "b", text: "99, 100, 200, 201" },
        { letter: "c", text: "98, 99, 100, 101" },
        { letter: "d", text: "101, 150, 199, 200" }
      ],
      answer: "d",
      explanation: "<p>The equivalence partitions are: {..., 99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}. Thus, there are 4 boundary values, which are: 100, 101, 199 and 200. In 2-value BVA, for each boundary value there are two coverage items (the boundary value and its closest neighbor belonging to the adjacent partition). As the closest neighbors are also boundary values in the adjacent partition, then there are just four coverage items.</p><p>Thus:</p><p>a) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage</p><p>b) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage</p><p>c) Is not correct. Only 100 and 101 are valid coverage items for 2-value BVA, so we achieve 50% coverage</p><p>d) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage</p>"
    },
    {
      n: 22,
      points: 1,
      k: "K3",
      lo: "FL-4.2.3",
      selectCount: 1,
      stem: "<p>You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.</p><div class='exhibit'><table class='decision-table'><thead><tr><th></th><th>R1</th><th>R2</th><th>R3</th></tr></thead><tbody><tr><td>C1: First attempt at the exam?</td><td>–</td><td>–</td><td>F</td></tr><tr><td>C2: Theoretical exam passed?</td><td>T</td><td>F</td><td>–</td></tr><tr><td style='border-bottom:3px solid var(--ink)'>C3: Practical exam passed?</td><td style='border-bottom:3px solid var(--ink)'>T</td><td style='border-bottom:3px solid var(--ink)'>–</td><td style='border-bottom:3px solid var(--ink)'>F</td></tr><tr><td>Issue a driving license?</td><td>X</td><td></td><td></td></tr><tr><td>Request additional driving lessons?</td><td></td><td></td><td>X</td></tr><tr><td>Request to take the exam again?</td><td></td><td>X</td><td></td></tr></tbody></table></div><p>What test data will show that there are contradictory rules in the decision table?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "C1 = T, C2 = T, C3 = F" },
        { letter: "b", text: "C1 = T, C2 = F, C3 = T" },
        { letter: "c", text: "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T" },
        { letter: "d", text: "C1 = F, C2 = F, C3 = F" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. The combination (T, T, F) does not match any rule. This is an example of omission, not a contradiction</p><p>b) Is not correct. The combination (T, F, T) matches only one column, R2, so there is no contradiction</p><p>c) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one column, R1, so there is no contradiction</p><p>d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3.</p>"
    },
    {
      n: 23,
      points: 1,
      k: "K3",
      lo: "FL-4.2.4",
      selectCount: 1,
      stem: "<p>You are designing test cases based on the following state transition diagram:</p>\n<p>What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?</p>",
      exhibit: "<div class='exhibit'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 260' style='max-width:640px;width:100%;height:auto' role='img' aria-label='State transition diagram: START, REQUESTING, WAITING LIST, CONFIRMED, END'><defs><marker id='arrC23' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' style='fill:var(--ink-soft)'/></marker></defs><ellipse cx='95' cy='40' rx='62' ry='27' style='fill:var(--card);stroke:var(--ink-soft);stroke-width:1.5'/><text x='95' y='45' text-anchor='middle' font-size='13' font-weight='bold' fill='#111'>START</text><ellipse cx='320' cy='40' rx='74' ry='27' style='fill:var(--card);stroke:var(--ink-soft);stroke-width:1.5'/><text x='320' y='45' text-anchor='middle' font-size='13' font-weight='bold' fill='#111'>REQUESTING</text><ellipse cx='530' cy='40' rx='74' ry='27' style='fill:var(--card);stroke:var(--ink-soft);stroke-width:1.5'/><text x='530' y='45' text-anchor='middle' font-size='13' font-weight='bold' fill='#111'>WAITING LIST</text><ellipse cx='320' cy='145' rx='72' ry='27' style='fill:var(--card);stroke:var(--ink-soft);stroke-width:1.5'/><text x='320' y='150' text-anchor='middle' font-size='13' font-weight='bold' fill='#111'>CONFIRMED</text><ellipse cx='320' cy='228' rx='56' ry='27' style='fill:var(--card);stroke:var(--ink-soft);stroke-width:1.5'/><text x='320' y='233' text-anchor='middle' font-size='13' font-weight='bold' fill='#111'>END</text><path d='M 157 40 L 244 40' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC23)'/><text x='200' y='30' text-anchor='middle' font-size='11' fill='#333'>Room request</text><path d='M 394 40 L 454 40' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC23)'/><text x='424' y='30' text-anchor='middle' font-size='11' fill='#333'>Not available</text><path d='M 320 67 L 320 116' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC23)'/><text x='330' y='95' font-size='11' fill='#333'>Available</text><path d='M 482 58 C 452 100 442 128 394 150' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC23)'/><text x='436' y='108' font-size='11' fill='#333'>Available</text><path d='M 320 172 L 320 199' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC23)'/><text x='330' y='190' font-size='11' fill='#333'>Pay</text><path d='M 586 62 C 620 130 606 208 380 228' fill='none' stroke='var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC23)'/><text x='598' y='148' font-size='11' fill='#333'>Cancel</text></svg></div>",
      options: [
        { letter: "a", text: "3" },
        { letter: "b", text: "2" },
        { letter: "c", text: "5" },
        { letter: "d", text: "6" }
      ],
      answer: "a",
      explanation: "<p>The following three transitions:</p><ul><li>\"REQUESTING → CONFIRMED\"</li><li>\"WAITING LIST → CONFIRMED\"</li><li>\"WAITING LIST → END\"</li></ul><p>cannot appear in the same test case, which suggests that at least three test cases are required. All the other transitions can appear in combination with one or more of these three transitions, so we need a minimum of three test cases. In fact, only three sequences are possible:</p><p>TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END<br/>TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END<br/>TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END</p><p>Thus:</p><p>a) Is correct</p><p>b) Is not correct</p><p>c) Is not correct</p><p>d) Is not correct</p>"
    },
    {
      n: 24,
      points: 1,
      k: "K2",
      lo: "FL-4.3.2",
      selectCount: 1,
      stem: "<p>You want to apply branch testing to the code represented by the following control flow graph. How many coverage items do you need to test?</p>",
      exhibit: "<div class='exhibit'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 400' style='max-width:420px;width:100%;height:auto' role='img' aria-label='Control flow graph with seven nodes and eight edges'><defs><marker id='arrC24' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' style='fill:var(--ink-soft)'/></marker></defs><path d='M 240 74 L 240 102' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 232 153 Q 208 208 173 194' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 134 182 Q 128 128 216 135' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 256 148 L 281 180' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 283 219 L 247 260' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 317 219 L 353 260' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 245 293 L 286 340' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><path d='M 355 293 L 314 340' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC24)'/><circle cx='240' cy='50' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><circle cx='240' cy='130' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><circle cx='150' cy='200' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><circle cx='300' cy='200' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><circle cx='230' cy='280' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><circle cx='370' cy='280' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><circle cx='300' cy='355' r='24' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/></svg></div>",
      options: [
        { letter: "a", text: "2" },
        { letter: "b", text: "4" },
        { letter: "c", text: "8" },
        { letter: "d", text: "7" }
      ],
      answer: "c",
      explanation: "<p>In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph.</p><p>Thus:</p><p>a) Is not correct</p><p>b) Is not correct</p><p>c) Is correct</p><p>d) Is not correct</p>"
    },
    {
      n: 25,
      points: 1,
      k: "K2",
      lo: "FL-4.3.3",
      selectCount: 1,
      stem: "<p>How can white-box testing be useful in support of black-box testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests" },
        { letter: "b", text: "White-box coverage analysis can help testers identify unreachable fragments of the source code" },
        { letter: "c", text: "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique" },
        { letter: "d", text: "White-box test techniques can provide coverage items for black-box techniques" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code</p><p>b) Is not correct. This statement is correct, but it has nothing to do with black-box testing</p><p>c) Is not correct. In general there are no relationships between white-box test techniques and black-box test techniques</p><p>d) Is not correct. White-box test techniques are used to design tests based on the test object itself, while black-box test techniques are used to design tests based on the specification. Therefore, there is no relation between coverage items derived from these two types of test techniques</p>"
    },
    {
      n: 26,
      points: 1,
      k: "K2",
      lo: "FL-4.4.1",
      selectCount: 1,
      stem: "<p>Consider the following list:</p><ul><li>Correct input not accepted</li><li>Incorrect input accepted</li><li>Wrong output format</li><li>Division by zero</li></ul><p>What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Exploratory testing" },
        { letter: "b", text: "Fault attack" },
        { letter: "c", text: "Checklist-based testing" },
        { letter: "d", text: "Boundary value analysis" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Exploratory testing uses test charters, not a list of possible defects/failures. Although exploratory testing can incorporate the use of other test techniques, in this case a fault attack is the most likely option</p><p>b) Is correct. This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures</p><p>c) Is not correct. The tester is using a checklist of items to support their testing. Both error guessing and checklist-based testing use such lists, however, the list here is of possible failures, not test conditions, and so the MOST PROBABLE test technique is fault attack, which focuses on errors, defects and failures</p><p>d) Is not correct. BVA is based on an analysis of boundary values of equivalence partitions. The above list does not mention equivalence partitions or their boundaries</p>"
    },
    {
      n: 27,
      points: 1,
      k: "K2",
      lo: "FL-4.4.3",
      selectCount: 1,
      stem: "<p>Which of the following BEST describes how using checklist-based testing can result in increased coverage?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items" },
        { letter: "b", text: "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage" },
        { letter: "c", text: "Each checklist item should be tested separately and independently, so the elements cover different areas of the software" },
        { letter: "d", text: "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Although it is true that the tester can implement and execute detailed test cases based on the checklist, it does not explain how this would result in increased coverage</p><p>b) Is not correct. Checklist items should not be automated. But even if they are, the automated test scripts always execute the tests in the same way, which usually does not result in increased coverage</p><p>c) Is not correct. It is true that each checklist item should be tested separately and independently. But this impacts the test execution order and does not impact the achieved coverage, and so does not result in increased coverage</p><p>d) Is correct. If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester and this will result in increased coverage</p>"
    },
    {
      n: 28,
      points: 1,
      k: "K2",
      lo: "FL-4.5.2",
      selectCount: 1,
      stem: "<p>Which of the following provides the BEST example of a scenario-oriented acceptance criterion?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The application must allow users to delete their account and all associated data upon request" },
        { letter: "b", text: "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so" },
        { letter: "c", text: "IF (contain(product(23).Name, cart.products())) THEN return FALSE" },
        { letter: "d", text: "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to (in this case, the right to be forgotten). This is an example of a rule-oriented acceptance criterion</p><p>b) Is correct. This acceptance criterion describes an example scenario that must be realized by the system. This is an example of a scenario-oriented acceptance criterion</p><p>c) Is not correct. This sentence looks more like a line of code that implements some business rule. Acceptance criteria should be written in collaboration with business representatives, and therefore should be written in language they understand. This sentence will most likely be unintelligible to these stakeholders</p><p>d) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to and how compliance will be ensured. Therefore, this is an example of a rule-oriented acceptance criterion, not a scenario-based acceptance criterion</p>"
    },
    {
      n: 29,
      points: 1,
      k: "K3",
      lo: "FL-4.5.3",
      selectCount: 1,
      stem: "<p>You are using acceptance test-driven development and designing test cases based on the following user story:</p><p>As a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors.</p><p>Acceptance Criteria:</p><ul><li>AC1: Regular users have access to floors 1 to 3</li><li>AC2: Floor 4 is only accessible to Special users</li><li>AC3: Special users have all the access rights of Regular users</li></ul><p>Which test case is the MOST reasonable one to test AC3?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Check that a Regular user can access floors 1 and 3" },
        { letter: "b", text: "Check that a Regular user cannot access floor 4" },
        { letter: "c", text: "Check that a Special user can access floor 5" },
        { letter: "d", text: "Check that a Special user can access floors 1, 2 and 3" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user</p><p>b) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user</p><p>c) Is not correct. There is no floor 5 described in the acceptance criteria. The test cases should not extend the scope of the user story. But even if we would like to perform negative testing, this test is not directly related to AC3</p><p>d) Is correct. This is the way we can check if a Special user can access floors which are accessible to a Regular user</p>"
    },
    {
      n: 30,
      points: 1,
      k: "K2",
      lo: "FL-5.1.1",
      selectCount: 1,
      stem: "<p>Which of the following is NOT a purpose of a test plan?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "To define test data and expected results for component tests and component integration tests" },
        { letter: "b", text: "To define as exit criteria from the component test level that \"100% statement coverage and 100% branch coverage must be achieved\"" },
        { letter: "c", text: "To describe what fields the test progress report shall contain and what should be the form of this report" },
        { letter: "d", text: "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like</p><p>b) Is not correct. One of the purposes of a test plan is to help ensure that test activities will meet the established criteria, by including entry criteria and exit criteria. The code coverage criteria are an example of such criteria for the component test level</p><p>c) Is not correct. Documentation templates are typical content of a test plan. This helps to facilitate communication between the stakeholders by defining a standard way of communicating or reporting</p><p>d) Is not correct. One of the purposes of a test plan is to demonstrate that testing will adhere to the existing test policy and test strategy, or to explain why the testing will deviate from them. This is an example of explaining the deviation, regarding the test levels that will be (or will not be) followed</p>"
    },    {
      n: 31,
      points: 1,
      k: "K3",
      lo: "FL-5.1.4",
      selectCount: 1,
      stem: "<p>At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation:</p><p>E(n) = (3*A(n-1) + A(n-2)) / 4</p><p>The graph shows the estimated and actual amount of work for the first four iterations.</p><p>What is the estimated amount of work for iteration #5?</p>",
      exhibit: "<div class='exhibit'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 660 315' style='max-width:660px;width:100%;height:auto' role='img' aria-label='Bar chart: estimated effort 8, 7, 10.75, 9 person-days and actual effort 7, 12, 8, 6 person-days for iterations 1 to 4'><text x='330' y='18' text-anchor='middle' font-size='15' font-weight='700'>Estimated and actual effort (in person-days)</text><path d='M 46 29 L 640 29 M 46 46 L 640 46 M 46 63 L 640 63 M 46 80 L 640 80 M 46 97 L 640 97 M 46 114 L 640 114 M 46 131 L 640 131 M 46 148 L 640 148 M 46 165 L 640 165 M 46 182 L 640 182 M 46 199 L 640 199 M 46 216 L 640 216 M 46 233 L 640 233' style='stroke:var(--line)' stroke-width='1'/><path d='M 46 250 L 640 250' style='stroke:var(--ink-soft)' stroke-width='1.5'/><text x='40' y='253.5' text-anchor='end' font-size='10.5'>0</text><text x='40' y='236.5' text-anchor='end' font-size='10.5'>1</text><text x='40' y='219.5' text-anchor='end' font-size='10.5'>2</text><text x='40' y='202.5' text-anchor='end' font-size='10.5'>3</text><text x='40' y='185.5' text-anchor='end' font-size='10.5'>4</text><text x='40' y='168.5' text-anchor='end' font-size='10.5'>5</text><text x='40' y='151.5' text-anchor='end' font-size='10.5'>6</text><text x='40' y='134.5' text-anchor='end' font-size='10.5'>7</text><text x='40' y='117.5' text-anchor='end' font-size='10.5'>8</text><text x='40' y='100.5' text-anchor='end' font-size='10.5'>9</text><text x='40' y='83.5' text-anchor='end' font-size='10.5'>10</text><text x='40' y='66.5' text-anchor='end' font-size='10.5'>11</text><text x='40' y='49.5' text-anchor='end' font-size='10.5'>12</text><text x='40' y='32.5' text-anchor='end' font-size='10.5'>13</text><rect x='97' y='114' width='22' height='136' style='fill:var(--ink)'/><rect x='123' y='131' width='22' height='119' style='fill:var(--ink-faint)'/><rect x='246' y='131' width='22' height='119' style='fill:var(--ink)'/><rect x='272' y='46' width='22' height='204' style='fill:var(--ink-faint)'/><rect x='395' y='67.25' width='22' height='182.75' style='fill:var(--ink)'/><rect x='421' y='114' width='22' height='136' style='fill:var(--ink-faint)'/><rect x='544' y='97' width='22' height='153' style='fill:var(--ink)'/><rect x='570' y='148' width='22' height='102' style='fill:var(--ink-faint)'/><text x='121' y='272' text-anchor='middle' font-size='12'>Iteration #1</text><text x='270' y='272' text-anchor='middle' font-size='12'>Iteration #2</text><text x='419' y='272' text-anchor='middle' font-size='12'>Iteration #3</text><text x='568' y='272' text-anchor='middle' font-size='12'>Iteration #4</text><rect x='248' y='286' width='12' height='12' style='fill:var(--ink)'/><text x='266' y='296' font-size='12'>Estimated</text><rect x='346' y='286' width='12' height='12' style='fill:var(--ink-faint)'/><text x='364' y='296' font-size='12'>Actual</text></svg></div>",
      options: [
        { letter: "a", text: "10.5 person-days" },
        { letter: "b", text: "8.25 person-days" },
        { letter: "c", text: "6.5 person-days" },
        { letter: "d", text: "9.4 person-days" }
      ],
      answer: "c",
      explanation: "<p>From the graph we have: A(4)=6 and A(3)=8 (the last two gray boxes).</p><p>From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days.</p><p>Thus:</p><p>a) Is not correct</p><p>b) Is not correct</p><p>c) Is correct</p><p>d) Is not correct</p>"
    },
    {
      n: 32,
      points: 1,
      k: "K3",
      lo: "FL-5.1.5",
      selectCount: 1,
      stem: "<p>You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7. The following figure includes the priorities of these test cases (1=highest priority, 3 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed. Which test case should be executed sixth?</p>",
      exhibit: "<div class='exhibit'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 190' style='max-width:650px;width:100%;height:auto' role='img' aria-label='Figure: test cases TC1 to TC7 with priorities; TC1 to TC2, TC2 to TC5, TC5 to TC6, TC4 to TC5 and TC4 to TC7 dependency arrows'><defs><marker id='arrC32' viewBox='0 0 10 10' refX='9' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'><path d='M 0 0 L 10 5 L 0 10 z' style='fill:var(--ink-soft)'/></marker></defs><path d='M 137 38 L 176 38' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC32)'/><path d='M 292 38 L 331 38' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC32)'/><path d='M 447 38 L 486 38' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC32)'/><path d='M 255 118 L 370 65' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC32)'/><path d='M 292 143 L 426 143' style='fill:none;stroke:var(--ink-soft)' stroke-width='1.5' marker-end='url(#arrC32)'/><rect x='25' y='15' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='80' y='38' text-anchor='middle' font-size='13' font-weight='700'>TC 1</text><text x='80' y='55' text-anchor='middle' font-size='11'>priority: 2</text><rect x='180' y='15' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='235' y='38' text-anchor='middle' font-size='13' font-weight='700'>TC 2</text><text x='235' y='55' text-anchor='middle' font-size='11'>priority: 3</text><rect x='335' y='15' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='390' y='38' text-anchor='middle' font-size='13' font-weight='700'>TC 5</text><text x='390' y='55' text-anchor='middle' font-size='11'>priority: 1</text><rect x='490' y='15' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='545' y='38' text-anchor='middle' font-size='13' font-weight='700'>TC 6</text><text x='545' y='55' text-anchor='middle' font-size='11'>priority: 3</text><rect x='25' y='120' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='80' y='143' text-anchor='middle' font-size='13' font-weight='700'>TC 3</text><text x='80' y='160' text-anchor='middle' font-size='11'>priority: 2</text><rect x='180' y='120' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='235' y='143' text-anchor='middle' font-size='13' font-weight='700'>TC 4</text><text x='235' y='160' text-anchor='middle' font-size='11'>priority: 2</text><rect x='430' y='120' width='110' height='46' rx='8' style='fill:var(--card);stroke:var(--ink)' stroke-width='1.5'/><text x='485' y='143' text-anchor='middle' font-size='13' font-weight='700'>TC 7</text><text x='485' y='160' text-anchor='middle' font-size='11'>priority: 1</text></svg></div>",
      options: [
        { letter: "a", text: "TC 3" },
        { letter: "b", text: "TC 5" },
        { letter: "c", text: "TC 6" },
        { letter: "d", text: "TC 2" }
      ],
      answer: "a",
      explanation: "<p>We want to run test cases according to their priorities, but we also need to consider the dependencies. If we only consider priorities, we want to first run TC 5 and TC 7 (highest priority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest priority). However, in order to run TC 7, we need to first run TC 4. In order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by TC 1, which should be run prior to TC 2. So, in order to run priority 1 test cases as early as possible, the first five test cases should be: TC 4 → TC 7 → TC 1 → TC 2 → TC 5. Next, we need to run TC 3, because it has higher priority than TC 6. Thus the full schedule will be TC 4 → TC 7 → TC 1 → TC 2 → TC 5 → TC 3 → TC 6. So, the sixth test case will be TC 3.</p><p>Thus:</p><p>a) Is correct</p><p>b) Is not correct</p><p>c) Is not correct</p><p>d) Is not correct</p>"
    },
    {
      n: 33,
      points: 1,
      k: "K1",
      lo: "FL-5.1.6",
      selectCount: 1,
      stem: "<p>What does the test pyramid model show?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "That tests may have different priorities" },
        { letter: "b", text: "That tests may have different granularity" },
        { letter: "c", text: "That tests may require different coverage criteria" },
        { letter: "d", text: "That tests may depend on other tests" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. The test pyramid model does not provide information about test priorities</p><p>b) Is correct. The test pyramid model shows that different tests have different levels of granularity</p><p>c) Is not correct. The test pyramid model is independent of coverage criteria</p><p>d) Is not correct. Test pyramid model does not show any relations between different tests</p>"
    },
    {
      n: 34,
      points: 1,
      k: "K2",
      lo: "FL-5.1.7",
      selectCount: 1,
      stem: "<p>What is the relationship between the testing quadrants, test levels and test types?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle" },
        { letter: "b", text: "Testing quadrants describe the degree of granularity of individual test types performed at each test level" },
        { letter: "c", text: "Testing quadrants assign the test types that can be performed to the test levels" },
        { letter: "d", text: "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model</p><p>b) Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test levels, is called the test pyramid</p><p>c) Is not correct. The statement is wrong, because in general any test type can be performed at any test level</p><p>d) Is correct. The testing quadrants group test levels, test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants</p>"
    },
    {
      n: 35,
      points: 1,
      k: "K2",
      lo: "FL-5.2.3",
      selectCount: 1,
      stem: "<p>Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Continuous risk monitoring allows us to identify an emerging risk as soon as possible" },
        { letter: "b", text: "Risk identification allows us to implement risk mitigation activities and reduce the risk level" },
        { letter: "c", text: "The assessed risk level helps us select the rigor of testing" },
        { letter: "d", text: "Risk analysis allows us to derive coverage items" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. Risk monitoring is part of risk control, not risk analysis</p><p>b) Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are defined during the risk control phase</p><p>c) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing</p><p>d) Is not correct. Coverage items are derived using test techniques, not through risk analysis</p>"
    },
    {
      n: 36,
      points: 1,
      k: "K2",
      lo: "FL-5.3.2",
      selectCount: 1,
      stem: "<p>Which of the following activities in the test process makes the MOST use of test progress reports?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Test design" },
        { letter: "b", text: "Test completion" },
        { letter: "c", text: "Test analysis" },
        { letter: "d", text: "Test planning" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test design</p><p>b) Is correct. A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data</p><p>c) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test analysis</p><p>d) Is not correct. Test progress reports are most used during test monitoring and test control, and test completion, not during test planning</p>"
    },
    {
      n: 37,
      points: 1,
      k: "K2",
      lo: "FL-5.4.1",
      selectCount: 1,
      stem: "<p>Which of the following is NOT an example of how configuration management supports testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "All commits to the repository are uniquely identified and version controlled" },
        { letter: "b", text: "All changes in the test environment elements are tracked" },
        { letter: "c", text: "All requirement specifications are referenced unambiguously in test plans" },
        { letter: "d", text: "All identified defects have an assigned status" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. When a user reports a software failure, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster</p><p>b) Is not correct. If a change to the test environment causes unexpected issues during testing, configuration management allows testers to roll back to a previous version of the environment. This ensures that testing can continue without being affected by the change</p><p>c) Is not correct. Configuration management ensures that all identified documentation (e.g., requirement specifications) and software items are referenced unambiguously in test documentation (e.g., test plans)</p><p>d) Is correct. This is ensured by defect management, not by the configuration management process</p>"
    },
    {
      n: 38,
      points: 1,
      k: "K3",
      lo: "FL-5.5.1",
      selectCount: 1,
      stem: "<p>Consider the following defect report for a web-based shopping application:</p><pre>Application: WebShop v0.99\n\nDefect: Login button not working\n\nSteps to Reproduce:\nLaunch the website\nClick on the login button\n\nExpected result: The user should be redirected to the login page.\nActual result: The login button does not respond when clicked.\n\nSeverity: High\nPriority: Urgent</pre><p>What is the MOST important information that is missing from this defect report?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Name of the tester and date" },
        { letter: "b", text: "Test environment elements and their version numbers" },
        { letter: "c", text: "Identification of the test object" },
        { letter: "d", text: "Impact on the interests of stakeholders" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. This is important, but not as important as test environment elements</p><p>b) Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the problem more quickly</p><p>c) Is not correct. The test object is identified (WebShop v0.99)</p><p>d) Is not correct. The impact is included – this is severity (high)</p>"
    },
    {
      n: 39,
      points: 1,
      k: "K2",
      lo: "FL-6.1.1",
      selectCount: 1,
      stem: "<p>Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Test execution and coverage tools" },
        { letter: "b", text: "Test design and implementation tools" },
        { letter: "c", text: "Defect management tools" },
        { letter: "d", text: "Test management tools" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Test execution and coverage tools facilitate the automated execution of test cases and the measurement of the coverage achieved by running those test cases. However, these tools do not help with the organization of defects and configuration management</p><p>b) Is not correct. Test design and test implementation tools facilitate the generation of test cases, test data and test procedures, but they do not help with the organization of defects and configuration management</p><p>c) Is not correct. Defect management tools are used to manage defects but are not testing tools and are not used to organize test cases or configuration management</p><p>d) Is correct. Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management</p>"
    },
    {
      n: 40,
      points: 1,
      k: "K1",
      lo: "FL-6.2.1",
      selectCount: 1,
      stem: "<p>Which of the following is MOST likely to be a benefit of test automation?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The capability of generating test cases without access to the test basis" },
        { letter: "b", text: "The achievement of increased coverage through more objective assessment" },
        { letter: "c", text: "The increase in test execution times available with higher processing power" },
        { letter: "d", text: "The prevention of human errors through greater consistency and repeatability" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. 'The capability of generating test cases without access to the test basis' is not possible. The generation of test cases by either testers or tools requires access to the test basis</p><p>b) Is not correct. 'The achievement of increased coverage through more objective assessment' is not a direct benefit of test automation. Test automation will provide more objective assessment of coverage, however that objective assessment will not increase the coverage. Only by using the results of the coverage to write further test cases can the coverage possibly be increased</p><p>c) Is not correct. 'The increase in test execution times available with higher processing power' is a contradictory statement as higher processing power would normally reduce execution times, and increased execution times are not a benefit as the testing would take longer</p><p>d) Is correct. The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors. For instance, it means that tests are consistently derived from requirements, test data is created in a systematic manner, and tests are executed by a tool in the same order with the same frequency</p>"
    }
  ]
};