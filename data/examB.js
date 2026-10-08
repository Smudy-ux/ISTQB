// ISTQB CTFL v4.0 Sample Exam B — data extracted from the official ISTQB sample exam documents
// Source: (c) International Software Testing Qualifications Board (ISTQB) — non-commercial study use
window.EXAMS = window.EXAMS || {};
window.EXAMS.B = {
  id: "B",
  title: "ISTQB CTFL 4.0 — Sample Exam B",
  questions: [
    {
      n: 1, points: 1, k: "K2", lo: "FL-1.2.1", selectCount: 1,
      stem: "<p>Which of the following is an example of why testing is necessary?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users" },
        { letter: "b", text: "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing" },
        { letter: "c", text: "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release" },
        { letter: "d", text: "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. It is often possible to use dynamic testing to cause a test object to fail in ways that could never be achieved by the users, such as by using fault injection. However, if the failure can never occur with real end users, then identifying it is not especially valuable as testing is ultimately aimed at improving the work product for the end users. Spending time testing for failures that cannot occur with real users is not an efficient use of a tester's time</p><p>b) Is not correct. Static testing in the form of static analysis is used by developers to identify defects in their code earlier than can be achieved through dynamic testing. Note, however, that static testing (and static analysis) is used to detect defects, not failures, which are found by dynamic testing. Thus it is the use of the term 'failures' that makes this an incorrect option</p><p>c) Is not correct. Static analysis directly detects defects in code, and this is normally information for the developer, not the customer.</p><p>d) Is correct. Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found in derived work products, such as the design and code, the requirements will need to be changed.</p>"
    },
    {
      n: 2, points: 1, k: "K1", lo: "FL-1.2.2", selectCount: 1,
      stem: "<p>Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "QA is performed as part of testing" },
        { letter: "b", text: "Testing is performed as part of QC" },
        { letter: "c", text: "Testing is another term for QC" },
        { letter: "d", text: "Testing is performed as part of QA" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects</p><p>b) Is correct. QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects</p><p>c) Is not correct. Although testing is a significant part of QC and helps to uncover defects, other (non-testing) techniques utilized in QC include formal methods like model checking and proof of correctness, as well as simulation and prototyping</p><p>d) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects</p>"
    },
    {
      n: 3, points: 1, k: "K2", lo: "FL-1.3.1", selectCount: 1,
      stem: "<p>One of the 'principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Creating test cases that cover every possible specified output" },
        { letter: "b", text: "Documenting all possible test input variations and prioritizing these based on importance" },
        { letter: "c", text: "Starting testing as early as possible with reviews and other static testing approaches" },
        { letter: "d", text: "Using equivalence partitioning and boundary value analysis to generate test cases" }
      ],
      answer: "d",
      explanation: "<p>The 'exhaustive testing is impossible' principle is concerned with the fact that it is not feasible to test every possible variation of inputs in all different circumstances, except in trivial cases. Instead, testing utilizes test techniques, test case prioritization, and risk-based testing to sample from the set of possibilities and focus test efforts.</p><p>a) Is not correct. The principle states that it is not feasible to test everything except in trivial cases. Testing everything would require testing every possible variation of inputs in all different circumstances, which is generally infeasible as there will be a practically infinite number of possibilities. Testing every possible expected result will not address this problem as the relationship between inputs and expected results can be different for each test object. Sometimes there may be a practically infinite number of possible expected results (e.g., when there are several variables representing real numbers), whereas at other times there may be just two expected results, such as with a single variable that can be either true or false</p><p>b) Is not correct. The principle states that it is not feasible to test every possible variation of inputs in all different circumstances. This is because for non-trivial systems there is a practically infinite number. Therefore, in practice, documenting all possible input variations would be impractical as it would take an infinite length of time</p><p>c) Is not correct. Starting testing as early as possible with reviews and other static testing approaches will not address the problem of there being too many possible test cases. The 'early testing saves time and money' principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures</p><p>d) Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases</p>"
    },
    {
      n: 4, points: 1, k: "K2", lo: "FL-1.4.1", selectCount: 1,
      stem: "<p>Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Test design" },
        { letter: "b", text: "Test execution" },
        { letter: "c", text: "Test analysis" },
        { letter: "d", text: "Test implementation" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. Test environment requirements are also specified, including the necessary infrastructure and tools</p><p>b) Is not correct. Test execution involves executing test cases (as part of test procedures), however it does not directly cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test conditions</p><p>c) Is not correct. Test analysis is used to identify the features that require testing. The test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. While this activity involves working with test conditions, it does not cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test cases</p><p>d) Is not correct. Test implementation includes the generation of test procedures, such as manual and automated test scripts, which are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. Test data is created, and the test environment built, and its set up verified. While this activity involves explicitly working with test cases, and may use test data requirements and test environment requirements to create test data and the test environment, it does not cover test conditions</p>"
    },
    {
      n: 5, points: 1, k: "K2", lo: "FL-1.4.2", selectCount: 1,
      stem: "<p>Which of the following is MOST likely to impact how testing is performed for a given test object?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The average level of experience of the organization's marketing team" },
        { letter: "b", text: "The knowledge of users that a new system is being developed for them" },
        { letter: "c", text: "The number of years' experience of the members of the test team" },
        { letter: "d", text: "The end user's organizational structure for a commercial music streaming application" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. The organization's marketing team is unlikely to perform much testing (although in some organizations they may be involved with acceptance testing), so their average level of experience (most of which would be in marketing) is not likely to impact how testing is performed for a given test object</p><p>b) Is not correct. The level of knowledge of users that a new system is being built for them is unlikely to affect how testing is performed. Any user involvement that could affect how testing is performed is more likely to be as a result of decisions made by the testers, customer and project manager</p><p>c) Is correct. The number of years' experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge (e.g., of different tools and defect types) that the team members will apply when they are testing</p><p>d) Is not correct. The organizational structure of the different end users (who may be varied) will change between users. So, it may not even be known when the application is being tested, and the end user's organizational structure can thus have little effect on how the testing is performed</p>"
    },
    {
      n: 6, points: 1, k: "K2", lo: "FL-1.4.4", selectCount: 1,
      stem: "<p>Which of the following statements is a CORRECT example of the value of traceability?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk" },
        { letter: "b", text: "Traceability between user requirements and test results provides a means of measuring project progress against business goals" },
        { letter: "c", text: "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers" },
        { letter: "d", text: "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Traceability between the mitigated risks and test cases that passed provides little information, because to be mitigated (by testing) the risks would need to have a corresponding test case that passed. To be able to assess residual risk, traceability between all risks and test results needs to be available, so that the risks that do not have a corresponding passing test can be identified as the residual risks</p><p>b) Is correct. Traceability between user requirements and test results provides an indication of which user requirements have been tested and so provides a means of measuring project progress (in the context of testing) against business goals</p><p>c) Is not correct. It is not clear that test cases that failed provide an indication of tester's skills any more than test cases that passed. It would partly depend on the test objective (e.g., building confidence or causing failures). Also, such measurement of testers based on test cases that passed and failed can be counter-productive as it could cause the testers to optimize their testing based on that metric rather than the test objective</p><p>d) Is not correct. Traceability between the identified risks and written test conditions provides a means of determining which further test conditions need to be written. Determining which risks are worth testing is part of risk management, and risk mitigation in particular</p>"
    },
    {
      n: 7, points: 1, k: "K2", lo: "FL-1.5.1", selectCount: 1,
      stem: "<p>Which of the following is MOST likely to be an example of a tester using a generic skill when testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The tester's deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming" },
        { letter: "b", text: "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system" },
        { letter: "c", text: "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts" },
        { letter: "d", text: "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Strong communication skills, active listening, and teamwork abilities enable a tester to interact effectively with all stakeholders, however a deep knowledge of a variety of computer games that allowed them to get on well with one developer is not an example of a generic skill useful to testers</p><p>b) Is correct. Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required by testers. A tester with experience as a pilot would make them better able to appreciate the acceptance criteria for the helicopter control system</p><p>c) Is not correct. Although programming skills could be considered as technical knowledge which can increase efficiency when utilizing some test tools, it is unlikely that these skills would improve their communication with business analysts</p><p>d) Is not correct. Although thoroughness, attention to detail, curiosity, and a methodical approach to identifying hard-to-find defects are all useful generic skills for testers, it is doubtful they would be generating test cases prior to starting exploratory testing. This is because one of the main tenets of exploratory testing is that the test cases are generated during the testing, not scripted in advance</p>"
    },
    {
      n: 8, points: 1, k: "K1", lo: "FL-1.5.2", selectCount: 1,
      stem: "<p>Which of the following is an advantage of the whole-team approach?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "It allows team members to take on any role at any time" },
        { letter: "b", text: "It only needs a single team to support the complete development project" },
        { letter: "c", text: "It embeds business representatives alongside developers in the same team" },
        { letter: "d", text: "It generates a team synergy that benefits the entire project" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, however that does not mean that team members can take on any role at any time. Typically, they only take on roles in which they are competent, and there is no suggestion that every team member can do every role</p><p>b) Is not correct. The whole-team approach applies to how a single team (typically in Agile software development) works; it does not cover how multiple teams are supposed to work on larger projects, and it does not suggest that only one 'whole' team is needed for a complete project</p><p>c) Is not correct. The whole-team approach does not expect every team member to be involved in every important decision. For instance, there is no need for the business representative (i.e., the Product Owner) to be involved in every technical decision that does not affect the business outcome and implementing such an approach would unnecessarily slow down the team's progress</p><p>d) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a team synergy that benefits the entire project</p>"
    },
    {
      n: 9, points: 1, k: "K2", lo: "FL-2.1.1", selectCount: 1,
      stem: "<p>Which of the following statements about the chosen software development lifecycle is CORRECT?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "If agile software development is used, automation of system tests replaces the need for regression testing" },
        { letter: "b", text: "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle" },
        { letter: "c", text: "If an iterative development model is used, then component testing is typically performed manually by developers" },
        { letter: "d", text: "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. In agile software development, deliverables are produced in each iteration, and the frequent delivery of increments necessitates extensive regression testing. Although some (or all) of this regression testing may be automated, the regression testing (automated or not) cannot be replaced by automation of system tests</p><p>b) Is correct. If a sequential development model is used, then early in the software development lifecycle no code is available for execution, and so during this time static testing (e.g., reviews) is performed. Later in the lifecycle, when code is available for execution, dynamic testing is possible. Note, however, that preparation for dynamic testing will often occur early in any software development lifecycle</p><p>c) Is not correct. If an iterative development model, like agile software development, is used, then component tests may well be used for regression testing for each iteration. In which case, there is a strong argument for automating these component tests, which will have to be run frequently, and there is unlikely to be a strong argument for developers performing these component tests manually</p><p>d) Is not correct. In most incremental development models, deliverables are produced in each increment, requiring both static testing and dynamic testing at all test levels for each increment delivered</p>"
    },
    {
      n: 10, points: 1, k: "K1", lo: "FL-2.1.2", selectCount: 1,
      stem: "<p>Which of the following is a good testing practice that applies to all software development lifecycles?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Testers should review work products as part of the next development phase" },
        { letter: "b", text: "Testers should review work products as soon as drafts are available" },
        { letter: "c", text: "Testers should review work products before test analysis and test design begin" },
        { letter: "d", text: "Testers should review work products immediately after they are published" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach. If they waited until the next development phase, then unnecessary development (and test) work could be started on unreviewed, flawed work products</p><p>b) Is correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach</p><p>c) Is not correct. Testers typically review work products that form the test basis as part of test analysis, not before test analysis and test design</p><p>d) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of the shift-left approach. Waiting until they are published means that any defects that could be found by tester's review will be in the published document</p>"
    },
    {
      n: 11, points: 1, k: "K1", lo: "FL-2.1.3", selectCount: 1,
      stem: "<p>Which of the following is an example of a test-first approach to development?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Test-Driven Development" },
        { letter: "b", text: "Coverage-Driven Development" },
        { letter: "c", text: "Quality-Driven Development" },
        { letter: "d", text: "Feature-Driven Development" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. Test-Driven Development (TDD) is a well-known example of a test-first approach to development</p><p>b) Is not correct. Coverage-Driven Development is not a correct example of a test-first approach to development</p><p>c) Is not correct. Quality-Driven Development is not a correct example of a test-first approach to development</p><p>d) Is not correct. Feature-Driven Development is not an example of a test-first approach to development, but is, instead, an agile software development methodology based around delivering features (as opposed to user stories in Scrum)</p>"
    },
    {
      n: 12, points: 1, k: "K2", lo: "FL-2.1.4", selectCount: 1,
      stem: "<p>Which of the following statements about DevOps is CORRECT?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing" },
        { letter: "b", text: "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression" },
        { letter: "c", text: "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach" },
        { letter: "d", text: "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. This is largely provided through continuous integration, where the developers submit component (unit) tests with their new code, which must pass for the code to be admitted to the build. Therefore, developers do need to complete component testing</p><p>b) Is correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests</p><p>c) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. Testers do not attempt to treat developers and operations equally by spending more time on release testing, although a shift-right approach to testing (testing in production) may well be used</p><p>d) Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) in DevOps facilitate stable test environments and reduce the need for manual testing, however, there is a risk of overlooking the importance of manual testing, especially from a user's perspective</p>"
    },
    {
      n: 13, points: 1, k: "K2", lo: "FL-2.2.1", selectCount: 1,
      stem: "<p>Which of the following is MOST likely to be performed as part of system testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Security testing of a credit management system by an independent test team" },
        { letter: "b", text: "Testing the interface of a currency exchange system with an external banking system" },
        { letter: "c", text: "Beta testing of a remote learning system by courseware developers" },
        { letter: "d", text: "Testing interactions between the user interface and database of a human resources system" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. System testing examines the behavior and capabilities of the complete system and covers non-functional testing of quality characteristics, which includes security testing. This type of testing is often performed by an independent test team based on system specifications</p><p>b) Is not correct. System integration testing examines the interfaces with other systems and external services</p><p>c) Is not correct. Beta testing is a type of acceptance testing performed at an external site by roles outside the development organization</p><p>d) Is not correct. Component integration testing involves testing the (interfaces and) interactions between components of a system, such as the user interface and database</p>"
    },
    {
      n: 14, points: 1, k: "K2", lo: "FL-2.2.3", selectCount: 1,
      stem: "<p>Which of the following statements is CORRECT?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses" },
        { letter: "b", text: "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced" },
        { letter: "c", text: "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object" },
        { letter: "d", text: "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Regression tests increase in number as the project progresses, as new regression tests are typically required as changes are made to the system. Similarly, the number of confirmation tests also typically increases as the project progresses as new confirmation tests are needed for each fix made to a system</p><p>b) Is not correct. It is the other way round. Confirmation tests are created and run when the test object is fixed, and regression tests are (ideally) run whenever the test object is enhanced (changed)</p><p>c) Is not correct. Confirmation testing verifies that a defect has been fixed correctly and so is concerned with testing changes to the test object. However, regression testing ensures that changes (including changes to the operational environment) do not have negative effects on unchanged software and so does not check that the operational environment remains unchanged</p><p>d) Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed — and so is concerned with changed code</p>"
    },
    {
      n: 15, points: 1, k: "K2", lo: "FL-3.1.3", selectCount: 1,
      stem: "<p>Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Lack of usability provided through the user interface" },
        { letter: "b", text: "Code with no path that reaches it" },
        { letter: "c", text: "Poor response times for most of the expected users" },
        { letter: "d", text: "Required features that are not implemented in the code" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. A lack of usability provided through the user interface can be detected through a review using a suitable checklist, but the lack of usability can also be identified by getting several typical users to dynamically test the user interface and provide feedback on its usability</p><p>b) Is correct. A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, which is impractical for real code</p><p>c) Is not correct. Poor response times for most of the expected users are difficult to determine without executing the code (i.e., by static testing), so in this situation dynamic testing could find a defect, but static testing is unlikely to find it</p><p>d) Is not correct. A review of the code by someone who is aware of the required features could detect that the required features had not been implemented in the code, and dynamic testing could also be used to determine that these required features had not been implemented</p>"
    },
    {
      n: 16, points: 1, k: "K1", lo: "FL-3.2.1", selectCount: 1,
      stem: "<p>Which of the following is a benefit of early and frequent stakeholder feedback?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Managers are aware of which developers are less productive" },
        { letter: "b", text: "It allows project managers to prioritize their stakeholder interactions" },
        { letter: "c", text: "It facilitates early communication of potential quality issues" },
        { letter: "d", text: "End users better understand why the delivery of the work product is delayed" }
      ],
      answer: "c",
      explanation: "<p>a) Is not correct. The feedback is from stakeholders (e.g., business representatives and end users), not from developers, so this feedback is not likely to inform managers which developers are more or less productive</p><p>b) Is not correct. Early and frequent feedback from stakeholders is not used by project managers to prioritize how they interact with the different stakeholders</p><p>c) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner</p><p>d) Is not correct. Early and frequent feedback can prevent the development of a product that does not meet stakeholder needs, and results in costly rework and missed deadlines, so, ideally there should be no delay. Also, the feedback is from stakeholders (not to them), which includes the end users, so the end users providing feedback will not aid the end users' understanding</p>"
    },
    {
      n: 17, points: 1, k: "K2", lo: "FL-3.2.2", selectCount: 1,
      stem: "<p>Given the following task descriptions:</p><ul><li>1. The quality characteristics to be evaluated and the exit criteria are selected</li><li>2. Everyone has access to the work product</li><li>3. Anomalies are identified in the work product</li><li>4. Anomalies are discussed</li></ul><p>And the following review activities:</p><ul><li>A. Individual review</li><li>B. Review initiation</li><li>C. Planning</li><li>D. Communication and analysis</li></ul><p>Which of the following BEST matches the task descriptions and activities?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "1B, 2C, 3D, 4A" },
        { letter: "b", text: "1B, 2D, 3C, 4A" },
        { letter: "c", text: "1C, 2A, 3B, 4D" },
        { letter: "d", text: "1C, 2B, 3A, 4D" }
      ],
      answer: "d",
      explanation: "<p>Considering each of the listed task descriptions:</p><ul><li>1. The quality characteristics to be evaluated and the exit criteria are selected — (Planning (C): Defining the review scope, purpose, work product to be reviewed, quality characteristics to be evaluated, areas of focus, exit criteria, supporting information such as standards, effort, and timeframes.)</li><li>2. Everyone has access to the work product — (Review initiation (B): Ensuring all participants have access to the work product and necessary resources, and clarifying their roles and responsibilities.)</li><li>3. Anomalies are identified in the work product — (Individual review (A): Evaluating the work product's quality, identifying and logging anomalies, recommendations, and questions using review techniques like checklist-based reviewing and scenario-based reviewing.)</li><li>4. Anomalies are analyzed and discussed — (Communication and analysis (D): Analyzing and discussing each anomaly, determining its status, ownership, and required actions, and making review decisions, normally in a meeting. This could include determining the need for a follow-up review.)</li></ul><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is not correct</li><li>c) Is not correct</li><li>d) Is correct. The correct match is: 1C, 2B, 3A, 4D</li></ul>"
    },
    {
      n: 18, points: 1, k: "K1", lo: "FL-3.2.3", selectCount: 1,
      stem: "<p>Given the following roles in reviews:</p><ul><li>1. Scribe</li><li>2. Review leader</li><li>3. Facilitator</li><li>4. Manager</li></ul><p>And the following responsibilities in reviews:</p><ul><li>A. Ensures the effective running of review meetings and the setting up a safe review environment</li><li>B. Records review information, such as decisions and new anomalies found during the review meeting</li><li>C. Decides what is to be reviewed and provides resources, such as staff and time for the review</li><li>D. Takes overall responsibility for the review such as organizing when and where the review will take place</li></ul><p>Which of the following BEST matches the roles and responsibilities?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "1A, 2B, 3D, 4C" },
        { letter: "b", text: "1A, 2C, 3B, 4D" },
        { letter: "c", text: "1B, 2D, 3A, 4C" },
        { letter: "d", text: "1B, 2D, 3C, 4A" }
      ],
      answer: "c",
      explanation: "<p>Considering each of the listed roles:</p><ul><li>1. Scribe (or Recorder) — responsible for gathering feedback from reviewers and documenting review information, such as decisions made, and any new anomalies identified during the review meeting. (Records review information, such as decisions and new anomalies found during the review meeting — B)</li><li>2. Review Leader — responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully. (Takes overall responsibility for the review such as organizing when and where the review will take place — D)</li><li>3. Facilitator (or Moderator) — responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely. (Ensures the effective running of review meetings and the setting up a safe review environment — A)</li><li>4. Manager — responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review. (Decides what is to be reviewed and provides resources, such as staff and time for the review — C)</li></ul><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is not correct</li><li>c) Is correct. The correct match is: 1B, 2D, 3A, 4C</li><li>d) Is not correct</li></ul>"
    },
    {
      n: 19, points: 1, k: "K2", lo: "FL-4.1.1", selectCount: 1,
      stem: "<p>Which of the following statements BEST describes the difference between decision table testing and branch testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object." },
        { letter: "b", text: "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code." },
        { letter: "c", text: "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic." },
        { letter: "d", text: "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code." }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Decision table testing is a black-box test technique, not a white-box test technique — the test cases are not based on the decisions in the source code. In branch testing, the test cases are derived from knowledge of the control flow of the test object</p><p>b) Is not correct. Anticipation of potential defects is used in error guessing (an experience-based test technique), not in branch testing (a white-box test technique). In decision table testing, the test cases are derived from the specification that describes the business logic</p><p>c) Is not correct. If a test case is based on the knowledge of the control flow of the test object, it is a white-box test technique. Decision table testing is typically based on an analysis of business logic, so it is a black-box test technique. In branch testing, test cases are not derived from the specification — this would make it a black-box test technique. Branch testing is a white-box test technique, where test cases are derived based on the source code structure</p><p>d) Is correct. Decision table testing is a black-box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white-box test technique, so test cases are based on an analysis of the test object's internal structure and processing. As the test cases are dependent on how the software is designed and coded, they can only be created after the design or implementation of the test object</p>"
    },
    {
      n: 20, points: 1, k: "K3", lo: "FL-4.2.1", selectCount: 1,
      stem: "<p>Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to.</p><p>For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total).</p><p>Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "19, 20, 30" },
        { letter: "b", text: "11, 12, 20" },
        { letter: "c", text: "1, 10, 50" },
        { letter: "d", text: "10, 29, 30, 31" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. 19 covers the \"no discount\" partition, 20 covers the \"50% discount\" partition, and 30 covers the \"10% discount\" partition. These three values cover all three of the valid equivalence partitions</p><p>b) Is not correct. 11 and 12 cover the \"no discount\" partition, while 20 covers the \"50% discount\" partition, so covering two of the three valid equivalence partitions</p><p>c) Is not correct. 1 covers the \"no discount\" partition, while 10 and 50 cover the \"10% discount\" partition. The \"50% discount\" partition is not covered, so overall two of the three valid equivalence partitions are covered</p><p>d) Is not correct. 29 and 31 cover the \"no discount\" partition, while 10 and 30 cover the \"10% discount\" partition. The \"50% discount\" partition is not covered, so overall two of the three valid equivalence partitions are covered</p>"
    },
    {
      n: 21, points: 1, k: "K3", lo: "FL-4.2.2", selectCount: 1,
      stem: "<p>You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect.</p><p>At first, the form is empty (password length = 0). You apply boundary value analysis to the \"password length\" variable.</p><p>Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage.</p><p>Which additional password lengths should be tested to achieve this?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "4, 5, 13, 14" },
        { letter: "b", text: "7, 11" },
        { letter: "c", text: "1, 5, 13" },
        { letter: "d", text: "1, 4, 7, 11, 14" }
      ],
      answer: "d",
      explanation: "<p>The domain for the password length has three equivalence partitions:</p><ul><li>passwords too short {0, 1, ..., 4, 5}</li><li>passwords OK {6, 7, ..., 11, 12}</li><li>passwords too long {13, 14, ...}</li></ul><p>To achieve full coverage for 3-value BVA we need to test the following values:</p><p>0, 1, 4, 5, 6, 7, 11, 12, 13, 14.</p><p>Since 2-value BVA is already covered, this means that we have already tested the passwords of length:</p><p>0, 5, 6, 12 and 13.</p><p>This means that the additional lengths that need to be covered to move from 2-value to 3-value are:</p><p>1, 4, 7, 11 and 14.</p><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is not correct</li><li>c) Is not correct</li><li>d) Is correct</li></ul>"
    },
    {
      n: 22, points: 1, k: "K3", lo: "FL-4.2.3", selectCount: 1,
      stem: "<p>The following decision table contains the rules for determining the risk of atherosclerosis.</p><p>You designed the test cases with the following input data:</p><ul><li>TC1: Cholesterol = 125 mg/dl, Blood pressure = 141 mm Hg</li><li>TC2: Cholesterol = 200 mg/dl, Blood pressure = 201 mm Hg</li><li>TC3: Cholesterol = 124 mg/dl, Blood pressure = 201 mm Hg</li><li>TC4: Cholesterol = 109 mg/dl, Blood pressure = 200 mm Hg</li><li>TC5: Cholesterol = 201 mg/dl, Blood pressure = 140 mm Hg</li></ul><p>What is the decision table coverage achieved by these test cases?</p>",
      exhibit: "<div class=\"exhibit\"><table><thead><tr><th></th><th>Rule 1</th><th>Rule 2</th><th>Rule 3</th><th>Rule 4</th><th>Rule 5</th></tr></thead><tbody><tr><td>Conditions</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Cholesterol (mg/dl)</td><td>124</td><td>124</td><td>125&#8211;200</td><td>125&#8211;200</td><td>201</td></tr><tr><td>Blood pressure (mm Hg)</td><td>140</td><td>&gt; 140</td><td>140</td><td>&gt; 140</td><td>&#8211;</td></tr><tr><td>Action</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Risk level</td><td>very low</td><td>low</td><td>medium</td><td>high</td><td>very high</td></tr></tbody></table></div>",
      options: [
        { letter: "a", text: "40%" },
        { letter: "b", text: "60%" },
        { letter: "c", text: "80%" },
        { letter: "d", text: "100%" }
      ],
      answer: "b",
      explanation: "<p>There are five columns in the decision table. Each test case covers one of them.</p><ul><li>TC1 and TC2 both cover Rule 4</li><li>TC3 and TC4 both cover Rule 2</li><li>TC5 covers Rule 5</li></ul><p>So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%. Therefore, option b) is the CORRECT option.</p><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is correct</li><li>c) Is not correct</li><li>d) Is not correct</li></ul>"
    },
    {
      n: 23, points: 1, k: "K3", lo: "FL-4.2.4", selectCount: 1,
      stem: "<p>A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.</p><p>Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?</p>",
      exhibit: "<div class=\"exhibit\"><svg viewBox=\"0 0 640 260\" xmlns=\"http://www.w3.org/2000/svg\"><defs><marker id=\"arrB23\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#333\"/></marker></defs><rect x=\"30\" y=\"95\" width=\"130\" height=\"60\" rx=\"12\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><text x=\"95\" y=\"118\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#333\">EMPTY</text><text x=\"95\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" fill=\"#333\">N = 0</text><rect x=\"255\" y=\"95\" width=\"130\" height=\"60\" rx=\"12\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><text x=\"320\" y=\"118\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#333\">NOT FULL</text><text x=\"320\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" fill=\"#333\">N = 1 or 2</text><rect x=\"480\" y=\"95\" width=\"130\" height=\"60\" rx=\"12\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"1.5\"/><text x=\"545\" y=\"118\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"bold\" fill=\"#333\">FULL</text><text x=\"545\" y=\"136\" text-anchor=\"middle\" font-size=\"12\" fill=\"#333\">N = 3</text><path d=\"M160,115 L253,115\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"207\" y=\"105\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Add (E1)</text><text x=\"207\" y=\"132\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">N: 0&#8594;1</text><path d=\"M290,95 C285,55 355,55 350,95\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"320\" y=\"50\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Add (E2), N: 1&#8594;2</text><path d=\"M385,115 L478,115\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"432\" y=\"105\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Add (E4)</text><text x=\"432\" y=\"132\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">N: 2&#8594;3</text><path d=\"M285,155 C255,220 130,220 105,155\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"185\" y=\"218\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Remove (E3)</text><text x=\"185\" y=\"232\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">N: 1&#8594;0</text><path d=\"M520,155 C495,200 375,200 352,155\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\" marker-end=\"url(#arrB23)\"/><text x=\"438\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" fill=\"#333\">Remove (E5)</text><text x=\"438\" y=\"214\" text-anchor=\"middle\" font-size=\"10\" fill=\"#555\">N: 3&#8594;2</text></svg></div>",
      options: [
        { letter: "a", text: "Add, Remove, Add, Add, Add" },
        { letter: "b", text: "Add, Add, Add, Add, Remove, Remove" },
        { letter: "c", text: "Add, Add, Add, Remove, Remove" },
        { letter: "d", text: "Add, Add, Add, Remove, Add" }
      ],
      answer: "c",
      explanation: "<p>Let us refer to the transitions with E1, ..., E5 as in the picture. The variable N denotes the number of elements currently stored. Each \"Add\" event increases it by 1, and each \"Remove\" event decreases it by 1. Notice, that when the \"Add\" event occurs while being in the NOT FULL state, the state changes to FULL only if N=2. If N&lt;2, the system stays in the NOT FULL state. If N=0, no \"Remove\" action is possible. Similarly, if N=3, no \"Add\" action is possible.</p><ul><li>Test a) can be written as E1, E3, E1, E2, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage).</li><li>Test b) is infeasible, because after the first three \"Add\" actions the system is in the FULL state and there is no valid transition going from FULL triggered by the \"Add\" event. After the first three transitions only 60% of valid transitions coverage is achieved.</li><li>Test c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5 valid transitions, achieving 100% valid transitions coverage).</li><li>Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage).</li></ul><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is not correct</li><li>c) Is correct</li><li>d) Is not correct</li></ul>"
    },
    {
      n: 24, points: 1, k: "K2", lo: "FL-4.3.1", selectCount: 1,
      stem: "<p>You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.</p><p>Which of the following sentences must be necessarily true?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "The test suite composed of tests T1 and T2 achieves 105% statement coverage" },
        { letter: "b", text: "There exists at least one statement that must have been executed by both T1 and T2" },
        { letter: "c", text: "At least 5% of the statements in the code that was tested are non-executable" },
        { letter: "d", text: "The test suite composed of tests T1 and T2 achieves full branch coverage" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. Coverage is always defined as the percentage of the covered elements. Therefore, it cannot exceed 100%</p><p>b) Is correct. If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible (see answer a). Therefore, at least 5% of executable statements must have been executed by both T1 and T2</p><p>c) Is not correct. Statement coverage does not tell us anything about the number of non-executable statements in the code</p><p>d) Is not correct. Even if a test suite achieves full statement coverage, this does not imply achieving full branch coverage</p>"
    },
    {
      n: 25, points: 1, k: "K2", lo: "FL-4.3.2", selectCount: 1,
      stem: "<p>Let the branch coverage metric be defined as BCov = (X / Y) * 100%.</p><p>What do X and Y represent in this formula?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "X = number of decision outcomes exercised by the test cases, Y = total number of decision outcomes in the code" },
        { letter: "b", text: "X = number of conditional branches exercised by the test cases, Y = total number of branches in the code" },
        { letter: "c", text: "X = number of branches exercised by the test cases, Y = total number of branches in the code" },
        { letter: "d", text: "X = number of conditional branches exercised by the test cases, Y = total number of decision outcomes in the code" }
      ],
      answer: "c",
      explanation: "<p>Branch testing is a white-box test technique in which the coverage items are branches. A branch is a transfer of control between two nodes in the control flow graph, which shows the possible sequences in which source code statements are executed in the test object. Each transfer of control can be either unconditional (i.e., straight-line code) or conditional (i.e., a decision outcome). Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage.</p><p>Thus:</p><ul><li>a) Is not correct. A decision outcome is a conditional branch. For branch testing, X counts not only conditional, but also unconditional branches</li><li>b) Is not correct. Branch coverage counts not only conditional, but also unconditional branches</li><li>c) Is correct. Branch coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage</li><li>d) Is not correct. Both X and Y count only conditional branches and do not take into account the unconditional branches</li></ul>"
    },
    {
      n: 26, points: 1, k: "K2", lo: "FL-4.4.2", selectCount: 2,
      stem: "<p>Which TWO of the following statements provide the BEST rationale for using exploratory testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Testers have not been allocated enough time for test design and test execution" },
        { letter: "b", text: "The existing test strategy requires that testers use formal, black-box test techniques" },
        { letter: "c", text: "The specification is written in a formal language that can be processed by a tool" },
        { letter: "d", text: "Testers are the members of an agile team and have good programming skills" },
        { letter: "e", text: "Testers are experienced in the business domain and have good analytical skills" }
      ],
      answer: ["a", "e"],
      explanation: "<p>Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. Exploratory testing is also useful to complement other more formal test techniques. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness.</p><p>Thus:</p><ul><li>a) Is correct. Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing</li><li>b) Is not correct. Exploratory testing is not a black-box test technique</li><li>c) Is not correct. Exploratory testing is useful when the specifications are poorly written</li><li>d) Is not correct. Programming skills have nothing to do with exploratory testing in principle</li><li>e) Is correct. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness</li></ul>"
    },
    {
      n: 27, points: 1, k: "K2", lo: "FL-4.4.3", selectCount: 1,
      stem: "<p>Which of the following BEST fits as an element of the checklist used in checklist-based testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "\"The developer made an error when implementing the code\"" },
        { letter: "b", text: "\"The achieved statement coverage exceeds 85%\"" },
        { letter: "c", text: "\"The program works correctly regarding functional and non-functional requirements\"" },
        { letter: "d", text: "\"The error messages are written in language that the user can understand\"" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Checklists should contain test conditions to be verified. This is an example of an error, not a test condition; even if the tester was able to deduce some potential test conditions from the examples of errors, this error description is too general</p><p>b) Is not correct. Checklists should not contain items that are better suited as exit criteria. This is an example of an exit criterion</p><p>c) Is not correct. Checklists should not contain items that are too general. This is a very general item, which practically describes a test objective</p><p>d) Is correct. This is an example of a test condition that can be checked by a human</p>"
    },
    {
      n: 28, points: 1, k: "K2", lo: "FL-4.5.2", selectCount: 1,
      stem: "<p>Consider the following acceptance criteria for a user story written from the perspective of an online store owner.</p><p>Given that the user is logged in and on the homepage,<br/>When the user clicks on the \"Add Item\" button,<br/>Then the \"Create Item\" form should appear,<br/>And the user should be able to input a name and price for the new item.</p><p>In what format is this acceptance criteria written?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Rule-oriented" },
        { letter: "b", text: "Scenario-oriented" },
        { letter: "c", text: "Product-oriented" },
        { letter: "d", text: "Process-oriented" }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. The rule-oriented format includes formats like bullet point verification lists or tabulated forms of input-output mappings, explicitly showing the rules to be followed. Given/When/Then is a scenario-oriented format because it describes a scenario to be verified</p><p>b) Is correct. This is a Given/When/Then format, which is scenario-oriented</p><p>c) Is not correct. There is no \"product-oriented\" format of acceptance criteria</p><p>d) Is not correct. There is no \"process-oriented\" format of acceptance criteria</p>"
    },
    {
      n: 29, points: 1, k: "K3", lo: "FL-4.5.3", selectCount: 1,
      stem: "<p>Your team analyzes the following user story in order to define the acceptance criteria:</p><p>As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.</p><p>Which of the following test cases will NOT be relevant for this user story?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Input: the customer logs into their account on the website and clicks the \"see order history\" button. Expected result: the system shows a list of all the customer's previous orders, including the date, order number, and total cost" },
        { letter: "b", text: "Input: the customer clicks on an order from the order list. Expected result: the system displays the individual items purchased, along with their prices and quantities" },
        { letter: "c", text: "Input: the customer clicks \"Sort ascending\" button on the order history screen. Expected result: the system shows the order history sorted by order number in ascending order" },
        { letter: "d", text: "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database. Expected result: the system accepts the registration and creates the account" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. The test case is related to viewing previous orders in the order history</p><p>b) Is not correct. The test case is related to viewing previous orders</p><p>c) Is not correct. The test case is related to viewing previous orders in the order history</p><p>d) Is correct. The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders</p>"
    },
    {
      n: 30, points: 1, k: "K2", lo: "FL-5.1.3", selectCount: 1,
      stem: "<p>Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:</p><ul><li>(1) Code development</li><li>(2) Submit code into a version control system and merge it into the \"test\" branch</li><li>(3) Perform component testing for the submitted code</li></ul><p>Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Static analysis returns no high severity warnings for the submitted code" },
        { letter: "b", text: "System version control reports no conflicts when merging code into the \"test\" branch" },
        { letter: "c", text: "Component tests are compiled and ready to be executed" },
        { letter: "d", text: "Statement coverage is at least 80%" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. This is something that can (and should) be checked before the code is submitted to version control</p><p>b) Is not correct. This is something that can be checked after step (2) is performed, because merge conflict reporting can be done after the code is submitted and merged</p><p>c) Is not correct. This fits better as the entry criterion for step (3)</p><p>d) Is not correct. This fits better as the exit criterion for step (3)</p>"
    },
    {
      n: 31, points: 1, k: "K3", lo: "FL-5.1.4", selectCount: 1,
      stem: "<p>You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.</p><p>The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?</p>",
      exhibit: "<div class=\"exhibit\"><table><thead><tr><th>Project</th><th>Development effort ($)</th><th>Test effort ($)</th></tr></thead><tbody><tr><td>P1</td><td>1,000,000</td><td>120,000</td></tr><tr><td>P2</td><td>800,000</td><td>40,000</td></tr><tr><td>P3</td><td>1,200,000</td><td>130,000</td></tr><tr><td>P4</td><td>600,000</td><td>70,000</td></tr></tbody></table></div>",
      options: [
        { letter: "a", text: "$40,000" },
        { letter: "b", text: "$80,000" },
        { letter: "c", text: "$81,250" },
        { letter: "d", text: "$82,500" }
      ],
      answer: "b",
      explanation: "<p>The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects).</p><p>The average test-to-development effort ratio is 1:10 ($90,000 : $900,000), which means that historically, on average, the test effort is 10% of the development effort.</p><p>So if the development effort is estimated to be $800,000, the estimated test effort is estimated as:</p><p>10% * $800,000 = 0.1 * $800,000 = $80,000.</p><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is correct</li><li>c) Is not correct</li><li>d) Is not correct</li></ul>"
    },
    {
      n: 32, points: 1, k: "K3", lo: "FL-5.1.5", selectCount: 1,
      stem: "<p>You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER.</p><p>You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority.</p><p>You also identified the following logical dependencies between test cases:</p><ul><li>SEARCH functionality must be tested before VIEW functionality can be tested.</li><li>VIEW functionality must be tested before ADD functionality.</li><li>ADD functionality must be tested before ORDER functionality.</li></ul><p>Which test case should be executed as the fourth one?</p>",
      exhibit: "<div class=\"exhibit\"><table><thead><tr><th>Test</th><th>Priority (1 = higher priority)</th></tr></thead><tbody><tr><td>TC1 SEARCH for product A</td><td>4</td></tr><tr><td>TC2 SEARCH for product B</td><td>4</td></tr><tr><td>TC3 VIEW product A details</td><td>3</td></tr><tr><td>TC4 VIEW product B details</td><td>2</td></tr><tr><td>TC5 ADD product A to a shopping cart</td><td>3</td></tr><tr><td>TC6 ADD product B to a shopping cart</td><td>1</td></tr><tr><td>TC7 place an ORDER</td><td>5</td></tr></tbody></table></div>",
      options: [
        { letter: "a", text: "TC3" },
        { letter: "b", text: "TC1" },
        { letter: "c", text: "TC7" },
        { letter: "d", text: "TC2" }
      ],
      answer: "b",
      explanation: "<p>The logical dependencies mean that for each product you have to run SEARCH &#8594; VIEW &#8594; ADD before running ORDER. You can add more products (using the same flow), before you run ORDER.</p><p>Based on this, TC1 or TC2 must be executed first, otherwise no progress can be made.</p><p>The first priority should be given to VIEW and ADD product B, as its test cases (TC6, TC4) are assigned with higher priority.</p><p>So, the first 3 tests to execute are TC2 -&gt; TC4 -&gt; TC6</p><p>Now we need to consider whether to run TC7 and then the entire flow for product A or run the TCs for product A first. If TC7 has lower priority than the other tests, they should be tested first.</p><p>Therefore, the entire flow should be:</p><p>TC2 -&gt; TC4 -&gt; TC6 -&gt; TC1 -&gt; TC3 -&gt; TC5 -&gt; TC7</p><ul><li>a) Is not correct. TC1 must be executed before TC3</li><li>b) Is correct</li><li>c) Is not correct. As shown above, TC7 is the last to be executed.</li><li>d) Is not correct. Product B must be executed before product A</li></ul>"
    },
    {
      n: 33, points: 1, k: "K2", lo: "FL-5.1.7", selectCount: 1,
      stem: "<p>According to the testing quadrants model, which of the following falls into quadrant Q1 (\"technology facing\" and \"support the team\")?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Usability testing" },
        { letter: "b", text: "Functional testing" },
        { letter: "c", text: "User acceptance testing" },
        { letter: "d", text: "Component integration testing" }
      ],
      answer: "d",
      explanation: "<p>a) Is not correct. Usability testing is business facing testing that critiques the product (Q3)</p><p>b) Is not correct. Functional testing is business facing testing (Q2)</p><p>c) Is not correct. User acceptance testing is business facing testing that critiques the product (Q3)</p><p>d) Is correct. Component integration testing is technology facing testing that supports the team (guides the development) (Q1)</p>"
    },
    {
      n: 34, points: 1, k: "K2", lo: "FL-5.2.4", selectCount: 1,
      stem: "<p>Given the following risks:</p><ul><li>1. Ineffective loop implementation causes long system responses</li><li>2. Consumers change their preferences</li><li>3. Flooding of the server room</li><li>4. Patients above a certain age receive inaccurate reports</li></ul><p>And the following mitigation activities:</p><ul><li>A. Risk acceptance</li><li>B. Testing for performance efficiency</li><li>C. Using boundary value analysis as the test technique</li><li>D. Risk transfer</li></ul><p>Which of the following BEST matches the risks with the mitigation activities?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "1C, 2D, 3A, 4B" },
        { letter: "b", text: "1B, 2D, 3A, 4C" },
        { letter: "c", text: "1B, 2A, 3D, 4C" },
        { letter: "d", text: "1C, 2A, 3D, 4B" }
      ],
      answer: "c",
      explanation: "<p>Considering each of the listed risks and their mitigations:</p><ul><li>1. Long system responses (1) can be tested in performance testing (B)</li><li>2. Changes in consumers' preferences (2) are usually out of our control, so usually we accept this risk (A)</li><li>3. Flooding of the server room (3) can cause significant loss, so we should transfer the risk, e.g., by buying an insurance policy (D)</li><li>4. That patients above a certain age receive inaccurate reports (4) suggests a potential boundary problem, which can be effectively detected with test techniques like BVA (C)</li></ul><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is not correct</li><li>c) Is correct. The correct combinations of risk and mitigation are: 1B, 2A, 3D and 4C</li><li>d) Is not correct</li></ul>"
    },
    {
      n: 35, points: 1, k: "K1", lo: "FL-5.3.1", selectCount: 1,
      stem: "<p>Which of the following is a product quality metric?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Mean time to failure" },
        { letter: "b", text: "Number of defects found" },
        { letter: "c", text: "Requirements coverage" },
        { letter: "d", text: "Defect detection percentage" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric</p><p>b) Is not correct. This is an example of a defect metric, not a product quality metric</p><p>c) Is not correct. This is an example of a coverage metric, not a product quality metric</p><p>d) Is not correct. This is an example of a defect metric, not a product quality metric</p>"
    },
    {
      n: 36, points: 1, k: "K2", lo: "FL-5.3.3", selectCount: 1,
      stem: "<p>You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline.</p><p>Which of the following is the LEAST effective way to communicate test progress to the customer?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Face-to-face" },
        { letter: "b", text: "Dashboards" },
        { letter: "c", text: "Email" },
        { letter: "d", text: "Video conferencing" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. The client is in a different location and time zone, so it may be difficult to communicate face-to-face</p><p>b) Is not correct. Dashboards are usually available to any user at any time, so the difference in time zones will not be as much of a hindrance to communication as verbal, face-to-face communication</p><p>c) Is not correct. Although the time difference between Europe and America is several hours, and this may cause some inconvenience, it's certainly not as great as with communicating face-to-face</p><p>d) Is not correct. Video conferencing tools are a convenient means of communication. Although communication between Europe and America during working hours usually requires one party to connect in the very early or very late hours, this is not as much of an inconvenience as verbal, face-to-face communication</p>"
    },
    {
      n: 37, points: 1, k: "K2", lo: "FL-5.4.1", selectCount: 1,
      stem: "<p>Which of the following BEST describes an example of how configuration management (CM) supports testing?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment" },
        { letter: "b", text: "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage" },
        { letter: "c", text: "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end" },
        { letter: "d", text: "Having the version number of the test case, the CM tool can automatically generate test data for this test case" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. For a complex configuration item (e.g., a test environment), configuration management (CM) records the items it consists of, their relationships, and versions</p><p>b) Is not correct. CM tools do not execute test cases and do not calculate coverage</p><p>c) Is not correct. A CM tool is not a licensed management tool</p><p>d) Is not correct. CM tools do not generate test data</p>"
    },
    {
      n: 38, points: 1, k: "K3", lo: "FL-5.5.1", selectCount: 1,
      stem: "<p>You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows.</p>",
      exhibit: "<div class=\"exhibit\"><pre>Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5\n\nTest run ID: 736\n\nStart 12:43:21.003\n\n12:43:21.003 Execution of TC1. Input: 3.               Output: 3.     Result: passed\n12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed\n12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8.     Result: failed\n12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2.  Result: failed\n12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed\n\nEnd 12:43:21.005\n\nTotal time of test cycle: 0:00:00.002</pre></div>",
      options: [
        { letter: "a", text: "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5." },
        { letter: "b", text: "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5." },
        { letter: "c", text: "The system fails to sort negative numbers. Reference: TC4, TC5." },
        { letter: "d", text: "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected." }
      ],
      answer: "b",
      explanation: "<p>a) Is not correct. While the sentence is true, it does not provide much value for the developer</p><p>b) Is correct. From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions. This is probably the cause of failures in TC3, TC4, TC5. Such information may help the developer to find the defect and fix it more efficiently</p><p>c) Is not correct. The system does not fail in sorting negative numbers. The problem is rather in disregarding duplicates</p><p>d) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren't aware that the test cases have any defects</p>"
    },
    {
      n: 39, points: 1, k: "K2", lo: "FL-6.1.1", selectCount: 1,
      stem: "<p>Given the following descriptions:</p><ul><li>1. Support workflow tracking</li><li>2. Facilitate communication</li><li>3. Virtual machines</li><li>4. Support reviews</li></ul><p>And the following test tool categories:</p><ul><li>A. Static testing tools</li><li>B. Tools supporting scalability and deployment standardization</li><li>C. DevOps tools</li><li>D. Collaboration tools</li></ul><p>Which of the following BEST matches the descriptions and categories?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "1A, 2B, 3C, 4D" },
        { letter: "b", text: "1B, 2D, 3C, 4A" },
        { letter: "c", text: "1C, 2D, 3B, 4A" },
        { letter: "d", text: "1D, 2C, 3A, 4B" }
      ],
      answer: "c",
      explanation: "<p>Considering each of the listed tool categories and their descriptions:</p><ul><li>A. Static testing tools &#8211; support the tester in performing reviews and static analysis (4)</li><li>B. Tools supporting scalability and deployment standardization &#8211; For example, virtual machines, containerization tools (3)</li><li>C. DevOps tools &#8211; support the DevOps delivery pipeline, workflow tracking, automated build process(es), continuous integration/continuous delivery (CI/CD) (1)</li><li>D. Collaboration tools &#8211; facilitate communication (2)</li></ul><p>Thus:</p><ul><li>a) Is not correct</li><li>b) Is not correct</li><li>c) Is correct. The correct match is: 1C, 2D, 3B, 4A</li><li>d) Is not correct</li></ul>"
    },
    {
      n: 40, points: 1, k: "K1", lo: "FL-6.2.1", selectCount: 1,
      stem: "<p>Which of the following is MOST likely to be a benefit of test automation?</p>",
      exhibit: null,
      options: [
        { letter: "a", text: "It provides coverage measures that are too complicated for humans to derive" },
        { letter: "b", text: "It shares responsibility for the testing with the tool vendor" },
        { letter: "c", text: "It removes the need for critical thinking when analyzing test results" },
        { letter: "d", text: "It generates test cases from an analysis of the program code" }
      ],
      answer: "a",
      explanation: "<p>a) Is correct. Test automation can provide measures that are too complicated for humans to derive, such as white-box testing coverage measures for all but the most trivial code</p><p>b) Is not correct. By using test tools, the responsibility for the testing is NOT shared with the tool vendor as the vendor is not involved in the testing, and it is the tester's responsibility. The only possible responsibility that could be assigned to the tool vendor is if the tool fails to work as expected and provides incorrect test results</p><p>c) Is not correct. Testers still need to apply critical thinking when analyzing anomalies in the test results to determine their likely cause</p><p>d) Is not correct. Neither testers nor tools can generate test cases simply from an analysis of the program code as the code is the implementation and provides no information on the expected results, which will need to come from another part of the test basis, such as the design specification</p>"
    }
  ]
};