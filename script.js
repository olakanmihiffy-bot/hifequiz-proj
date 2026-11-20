
/* ============================================
   HIFE.QUIZ — COMPLETE QUESTION BANK
   300 QUESTIONS | 4 SUBJECTS | 3 LEVELS
   ============================================ */

let nextQuestionId = 1;

function createQuestions(category, difficulty, items) {
    return items.map(([question, options, answer, explanation]) => ({
        id: nextQuestionId++,
        category,
        difficulty,
        question,
        options,
        answer,
        explanation
    }));
}

window.questionBank = [

    // ==========================================
    // TECHNOLOGY & PROGRAMMING — BEGINNER
    // ==========================================

    ...createQuestions("technology", "beginner", [

        ["What does HTML stand for?", ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], 0, "HTML stands for HyperText Markup Language and structures web pages."],

        ["Which language is primarily used to style web pages?", ["Python", "CSS", "Java", "SQL"], 1, "CSS controls the appearance and layout of web pages."],

        ["Which HTML tag creates a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], 1, "The anchor tag, written as <a>, creates hyperlinks."],

        ["Which language is commonly used to add interactivity to websites?", ["JavaScript", "HTML", "SQL", "XML"], 0, "JavaScript adds interactive behavior to web pages."],

        ["What does CSS stand for?", ["Computer Style Sheets", "Cascading Style Sheets", "Creative System Syntax", "Colorful Style System"], 1, "CSS means Cascading Style Sheets."],

        ["Which symbol is used for a single-line comment in JavaScript?", ["<!-- -->", "//", "##", "**"], 1, "JavaScript uses // for single-line comments."],

        ["Which HTML element represents the largest standard heading?", ["<heading>", "<h6>", "<h1>", "<head>"], 2, "The h1 element represents the highest-level heading."],

        ["What does CPU stand for?", ["Central Processing Unit", "Computer Power Utility", "Central Program User", "Core Processing Utility"], 0, "The CPU executes instructions and processes data."],

        ["Which of these is an example of an operating system?", ["Google Chrome", "Windows", "Microsoft Word", "HTML"], 1, "Windows is an operating system that manages computer resources."],

        ["Which device is commonly used to enter text into a computer?", ["Monitor", "Printer", "Keyboard", "Speaker"], 2, "A keyboard is an input device used to enter text."],

        ["What is the main purpose of a web browser?", ["To compile programs", "To access and display web pages", "To manufacture computers", "To store electricity"], 1, "A web browser retrieves and displays web content."],

        ["Which file extension is commonly used for JavaScript files?", [".css", ".html", ".js", ".py"], 2, "JavaScript source files commonly use the .js extension."],

        ["Which HTML tag inserts an image?", ["<picture>", "<img>", "<src>", "<imagefile>"], 1, "The img element embeds an image in an HTML page."],

        ["What does URL stand for?", ["Universal Record Link", "Uniform Resource Locator", "Unified Reference Language", "User Routing Location"], 1, "A URL identifies the location of a resource on the internet."],

        ["Which of these is a programming language?", ["Python", "Photoshop", "Windows", "Chrome"], 0, "Python is a general-purpose programming language."],

        ["What is the purpose of a password?", ["To increase screen brightness", "To protect access to an account", "To improve internet speed", "To format a document"], 1, "Passwords help authenticate users and protect accounts."],

        ["Which device displays visual output from a computer?", ["Keyboard", "Mouse", "Monitor", "Microphone"], 2, "A monitor displays visual information."],

        ["What does RAM stand for?", ["Random Access Memory", "Read Automatic Machine", "Rapid Application Module", "Remote Access Monitor"], 0, "RAM is temporary working memory used by a computer."],

        ["Which HTML tag creates a paragraph?", ["<text>", "<p>", "<paragraph>", "<para>"], 1, "The p element represents a paragraph."],

        ["Which of these is a search engine?", ["Firefox", "Google", "Windows", "Visual Studio Code"], 1, "Google provides a search engine for finding online information."],

        ["What is a database used for?", ["Playing music", "Organizing and storing data", "Cooling a computer", "Drawing pictures"], 1, "Databases store and organize information for retrieval and management."],

        ["Which character commonly ends a JavaScript statement?", ["#", ";", "@", "~"], 1, "Semicolons can terminate JavaScript statements, although they are sometimes optional."],

        ["What does Wi-Fi allow devices to do?", ["Connect wirelessly to a network", "Print without electricity", "Increase processor speed", "Replace an operating system"], 0, "Wi-Fi enables wireless network communication."],

        ["Which company developed the Windows operating system?", ["Apple", "Google", "Microsoft", "IBM"], 2, "Microsoft develops the Windows operating system."],

        ["What is an algorithm?", ["A computer screen", "A step-by-step procedure for solving a problem", "A storage device", "A type of cable"], 1, "An algorithm is a defined sequence of steps for solving a problem."]

    ]),

    // ==========================================
    // TECHNOLOGY & PROGRAMMING — INTERMEDIATE
    // ==========================================

    ...createQuestions("technology", "intermediate", [

        ["Which JavaScript method converts a JSON string into an object?", ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"], 1, "JSON.parse() converts a valid JSON string into a JavaScript value."],

        ["What is the purpose of the CSS box model?", ["To describe how elements occupy space", "To encrypt web pages", "To connect databases", "To compress images"], 0, "The box model describes content, padding, borders and margins."],

        ["Which SQL command retrieves records from a table?", ["GET", "OPEN", "SELECT", "FETCH TABLE"], 2, "SELECT retrieves data from database tables."],

        ["What does API stand for?", ["Application Programming Interface", "Advanced Program Installation", "Automated Processing Internet", "Application Protocol Integration"], 0, "An API defines how software components communicate."],

        ["Which JavaScript keyword declares a block-scoped variable that can be reassigned?", ["const", "let", "static", "define"], 1, "let declares a block-scoped variable that can be reassigned."],

        ["What is Git primarily used for?", ["Image editing", "Version control", "Database hosting", "Operating system installation"], 1, "Git tracks changes in files and supports collaborative development."],

        ["Which HTTP status code usually indicates a successful request?", ["404", "500", "200", "301"], 2, "HTTP 200 means the request succeeded."],

        ["What does responsive web design aim to achieve?", ["Faster CPU processing", "Layouts that adapt to different screen sizes", "Automatic database backups", "Encrypted passwords"], 1, "Responsive design adapts layouts to different devices and viewport sizes."],

        ["Which CSS property controls the space inside an element's border?", ["margin", "padding", "outline", "gap"], 1, "Padding creates space between an element's content and its border."],

        ["What does the DOM represent?", ["A database optimization method", "The structured document model of a web page", "A programming language", "A network security protocol"], 1, "The Document Object Model represents a page as a tree of objects."],

        ["Which JavaScript array method creates a new array by transforming each element?", ["filter()", "map()", "push()", "pop()"], 1, "map() transforms each element and returns a new array."],

        ["What is the primary function of DNS?", ["Encrypting files", "Translating domain names into IP addresses", "Managing computer memory", "Compressing websites"], 1, "DNS resolves domain names to corresponding network records, commonly IP addresses."],

        ["Which SQL clause filters rows before grouping?", ["ORDER BY", "HAVING", "WHERE", "GROUP BY"], 2, "WHERE filters individual rows before grouping takes place."],

        ["What is a foreign key in a relational database?", ["A password for the database", "A field referencing a key in another or the same table", "A duplicate database", "An encrypted column"], 1, "A foreign key establishes a relationship by referencing a key in another table or the same table."],

        ["Which Git command creates a local copy of a remote repository?", ["git push", "git clone", "git commit", "git merge"], 1, "git clone copies a repository into a local working directory."],

        ["What is the purpose of HTTPS?", ["To increase monitor resolution", "To secure HTTP communication using encryption", "To replace HTML", "To store website images"], 1, "HTTPS protects communication using TLS encryption."],

        ["Which JavaScript feature allows a function to wait for a Promise to settle?", ["await", "defer", "yield only", "pause"], 0, "await pauses an async function until a Promise settles."],

        ["What is the purpose of media queries in CSS?", ["To play audio", "To apply styles based on device or viewport conditions", "To store images", "To create database tables"], 1, "Media queries apply CSS rules when specified conditions are met."],

        ["Which data structure follows the Last In, First Out principle?", ["Queue", "Stack", "Tree", "Graph"], 1, "A stack removes the most recently added item first."],

        ["What does CRUD stand for in database operations?", ["Create, Read, Update, Delete", "Copy, Run, Upload, Download", "Connect, Retrieve, Use, Deploy", "Create, Replace, Undo, Display"], 0, "CRUD describes the four basic data operations."],

        ["Which JavaScript method adds an item to the end of an array?", ["shift()", "unshift()", "push()", "slice()"], 2, "push() appends one or more elements to an array."],

        ["What is the main purpose of a software firewall?", ["To cool a processor", "To monitor and control network traffic", "To increase storage", "To compile source code"], 1, "A firewall applies rules to allow or block network traffic."],

        ["Which of these is a NoSQL database?", ["MySQL", "PostgreSQL", "MongoDB", "SQLite"], 2, "MongoDB is a document-oriented NoSQL database."],

        ["What is the role of a web server?", ["To render computer hardware", "To receive requests and serve web content", "To write CSS automatically", "To replace a database"], 1, "A web server handles HTTP requests and returns resources or responses."],

        ["Which JavaScript operator checks both value and type equality?", ["==", "=", "===", "!="], 2, "The strict equality operator checks equality without type coercion."]

    ]),

    // ==========================================
    // TECHNOLOGY & PROGRAMMING — ADVANCED
    // ==========================================

    ...createQuestions("technology", "advanced", [

        ["What is the time complexity of binary search on a sorted array?", ["O(n)", "O(log n)", "O(n log n)", "O(1)"], 1, "Binary search halves the remaining search interval at each step."],

        ["Which concept allows a subclass to provide a specialized implementation of a superclass method?", ["Encapsulation", "Method overriding", "Compilation", "Serialization"], 1, "Method overriding lets a subclass redefine inherited behavior."],

        ["What is a race condition?", ["A slow network connection", "A result that depends on the timing of concurrent operations", "A syntax error", "A memory compression technique"], 1, "A race condition occurs when concurrent operations access shared state and timing affects the outcome."],

        ["Which database property ensures a transaction is treated as an indivisible unit?", ["Consistency", "Isolation", "Atomicity", "Durability"], 2, "Atomicity means a transaction either completes fully or has no effect."],

        ["What is the purpose of an index in a database?", ["To encrypt every row", "To speed up data retrieval", "To delete duplicate tables", "To replace primary keys"], 1, "Indexes can accelerate queries by reducing the need to scan entire tables."],

        ["Which JavaScript mechanism schedules a callback after the current call stack is empty?", ["The event loop", "The CSS cascade", "The garbage collector only", "The DOM parser"], 0, "The event loop coordinates queued tasks and callbacks with the call stack."],

        ["What is a closure in JavaScript?", ["A function with access to its lexical scope after the outer function returns", "A method that closes browser tabs", "A CSS selector", "A type of database"], 0, "A closure retains access to variables from its lexical environment."],

        ["Which algorithm finds shortest paths from one source in a graph with non-negative edge weights?", ["Depth-first search", "Dijkstra's algorithm", "Bubble sort", "Binary search"], 1, "Dijkstra's algorithm computes shortest paths when edge weights are non-negative."],

        ["What does normalization primarily reduce in relational database design?", ["Network latency", "Data redundancy and update anomalies", "CPU clock speed", "Encryption overhead"], 1, "Normalization organizes data to reduce redundancy and modification anomalies."],

        ["What is the purpose of a load balancer?", ["To distribute incoming traffic across multiple servers", "To compile code", "To encrypt database tables", "To create user passwords"], 0, "Load balancers distribute requests to improve availability and resource utilization."],

        ["Which cryptographic technique uses a public key and a corresponding private key?", ["Symmetric encryption", "Asymmetric cryptography", "Hashing only", "Compression"], 1, "Asymmetric cryptography uses a mathematically related public-private key pair."],

        ["What is a primary purpose of a compiler?", ["To execute electrical signals", "To translate source code into another form, often machine code", "To manage website cookies", "To store network packets"], 1, "A compiler translates source code into a target representation."],

        ["Which operating-system component decides which process gets CPU time?", ["File system", "Scheduler", "Device driver", "Shell"], 1, "The process scheduler allocates CPU time among runnable processes."],

        ["What is deadlock in operating systems?", ["A process finishing successfully", "Processes waiting indefinitely for resources held by one another", "A computer entering sleep mode", "A disk formatting error"], 1, "Deadlock occurs when processes are permanently blocked by circular resource dependencies."],

        ["What does Big O notation describe?", ["The exact runtime on every computer", "The asymptotic growth of resource usage", "The size of a source-code file", "The number of programming languages"], 1, "Big O expresses an upper-bound growth rate for an algorithm's resource requirements."],

        ["Which principle states that software components should depend on abstractions rather than concrete implementations?", ["Single Responsibility Principle", "Dependency Inversion Principle", "Open-Closed Principle", "Interface Segregation Principle"], 1, "Dependency inversion promotes dependence on abstractions rather than concrete details."],

        ["What is the main purpose of a content delivery network?", ["To distribute content through geographically spread servers", "To replace programming languages", "To remove all network protocols", "To compile mobile applications"], 0, "A CDN serves cached content from locations closer to users."],

        ["Which attack involves injecting malicious SQL through application input?", ["Phishing", "SQL injection", "DDoS", "Spoofing"], 1, "SQL injection exploits unsafe query construction to manipulate database commands."],

        ["What is eventual consistency in distributed systems?", ["All replicas update at exactly the same instant", "Replicas converge to the same value if no new updates occur", "Data is never replicated", "Transactions cannot fail"], 1, "Eventual consistency allows temporary differences before replicas converge."],

        ["Which data structure is commonly used to implement a priority queue efficiently?", ["Binary heap", "Linked list only", "Stack", "Hash set"], 0, "A binary heap supports efficient insertion and removal of the highest- or lowest-priority item."],

        ["What does containerization provide?", ["An isolated application environment sharing the host OS kernel", "A separate physical computer for every process", "Automatic elimination of software bugs", "A replacement for all databases"], 0, "Containers package applications and dependencies in isolated environments."],

        ["Which consensus algorithm is associated with Bitcoin's original proof-of-work mechanism?", ["Raft", "Proof of Work", "Paxos", "Proof of Authority"], 1, "Bitcoin uses proof of work to make block production costly and support consensus."],

        ["What is a memory leak?", ["A network packet loss", "Allocated memory that is no longer needed but remains unreleased or reachable", "A corrupted keyboard", "A database query timeout"], 1, "A memory leak occurs when unused memory remains allocated and cannot be reclaimed."],

        ["What does a RESTful API commonly use to identify resources?", ["Resource URLs", "CPU registers", "CSS classes", "Local variables"], 0, "REST APIs commonly identify resources through URIs and use HTTP methods for operations."],

        ["Which technique helps prevent cross-site scripting by treating untrusted input as data rather than executable markup?", ["Output encoding", "Increasing image size", "Disabling database indexes", "Using longer URLs"], 0, "Context-appropriate output encoding prevents untrusted data from being interpreted as executable code."]

    ]),

    // ==========================================
    // MATHEMATICS — BEGINNER
    // ==========================================

    ...createQuestions("mathematics", "beginner", [

        ["What is 15 + 27?", ["32", "42", "52", "40"], 1, "15 plus 27 equals 42."],

        ["What is 9 × 8?", ["64", "72", "81", "69"], 1, "Nine multiplied by eight equals 72."],

        ["What is half of 86?", ["42", "43", "44", "46"], 1, "86 divided by 2 equals 43."],

        ["Which number is a prime number?", ["9", "15", "17", "21"], 2, "17 has exactly two positive factors: 1 and 17."],

        ["What is 100 − 37?", ["63", "67", "73", "53"], 0, "100 minus 37 equals 63."],

        ["How many sides does a hexagon have?", ["5", "6", "7", "8"], 1, "A hexagon has six sides."],

        ["What is 25% of 200?", ["25", "40", "50", "75"], 2, "One quarter of 200 is 50."],

        ["What is the value of 7²?", ["14", "21", "49", "77"], 2, "Seven squared means 7 multiplied by 7, which equals 49."],

        ["What is the perimeter of a square with side length 5 cm?", ["10 cm", "15 cm", "20 cm", "25 cm"], 2, "A square's perimeter is four times its side length."],

        ["Which fraction is equivalent to 1/2?", ["2/3", "3/6", "4/6", "1/3"], 1, "Multiplying the numerator and denominator of 1/2 by 3 gives 3/6."],

        ["What is 3/4 expressed as a decimal?", ["0.25", "0.50", "0.75", "1.25"], 2, "Three divided by four equals 0.75."],

        ["What is the next number in the sequence 2, 4, 6, 8, ...?", ["9", "10", "11", "12"], 1, "The sequence increases by 2 each time."],

        ["What is 144 divided by 12?", ["10", "11", "12", "14"], 2, "144 divided by 12 equals 12."],

        ["How many degrees are in a right angle?", ["45", "90", "180", "360"], 1, "A right angle measures exactly 90 degrees."],

        ["What is the value of x if x + 5 = 12?", ["5", "6", "7", "8"], 2, "Subtracting 5 from both sides gives x = 7."],

        ["What is the average of 4, 6 and 8?", ["5", "6", "7", "8"], 1, "The sum is 18, and 18 divided by 3 equals 6."],

        ["What is 5³?", ["15", "25", "75", "125"], 3, "Five cubed is 5 multiplied by itself three times."],

        ["Which is the largest number?", ["0.6", "0.45", "0.8", "0.75"], 2, "0.8 is greater than 0.75, 0.6 and 0.45."],

        ["What is the area of a rectangle 8 cm long and 3 cm wide?", ["11 cm²", "22 cm²", "24 cm²", "48 cm²"], 2, "Area equals length multiplied by width: 8 × 3 = 24."],

        ["What is the Roman numeral for 10?", ["V", "X", "L", "C"], 1, "X represents 10 in Roman numerals."],

        ["What is 2.5 + 1.75?", ["3.25", "4.00", "4.25", "4.50"], 2, "2.50 plus 1.75 equals 4.25."],

        ["What is the smallest positive integer?", ["0", "1", "2", "-1"], 1, "The smallest positive integer is 1."],

        ["What is 30% of 90?", ["18", "27", "30", "36"], 1, "0.30 multiplied by 90 equals 27."],

        ["How many degrees are in a straight angle?", ["90", "120", "180", "360"], 2, "A straight angle measures 180 degrees."],

        ["If 3 pencils cost ₦60, how much does one pencil cost?", ["₦10", "₦15", "₦20", "₦30"], 2, "₦60 divided by 3 gives ₦20 per pencil."]

    ]),

    // ==========================================
    // MATHEMATICS — INTERMEDIATE
    // ==========================================

    ...createQuestions("mathematics", "intermediate", [

        ["Solve: 3x + 7 = 22.", ["3", "5", "7", "9"], 1, "Subtract 7 to get 3x = 15, then divide by 3."],

        ["What is the gradient of the line y = 4x − 3?", ["-3", "3", "4", "-4"], 2, "In y = mx + c, the gradient is the coefficient m of x."],

        ["What is the probability of rolling an even number on a fair six-sided die?", ["1/6", "1/3", "1/2", "2/3"], 2, "Three of the six possible outcomes are even, so the probability is 3/6."],

        ["What is the sum of the interior angles of a triangle?", ["90°", "180°", "270°", "360°"], 1, "The interior angles of every Euclidean triangle sum to 180 degrees."],

        ["Simplify: 2(3x + 4).", ["6x + 4", "6x + 8", "5x + 8", "6x + 6"], 1, "Distribute 2 across both terms to obtain 6x + 8."],

        ["What is the median of 3, 7, 9, 12, 15?", ["7", "9", "10", "12"], 1, "The middle value of the ordered list is 9."],

        ["Solve: x² = 49, where x is positive.", ["5", "6", "7", "8"], 2, "The positive square root of 49 is 7."],

        ["What is the circumference of a circle with radius 7 cm?", ["7π cm", "14π cm", "21π cm", "49π cm"], 1, "Circumference equals 2πr, so it is 14π cm."],

        ["Factorize: x² − 9.", ["(x − 9)(x + 1)", "(x − 3)(x + 3)", "(x − 3)²", "(x + 9)(x − 1)"], 1, "This is a difference of squares: x² − 3²."],

        ["What is the value of 2⁵?", ["16", "24", "32", "64"], 2, "2 multiplied by itself five times equals 32."],

        ["Convert 0.125 into a fraction in simplest form.", ["1/4", "1/8", "1/16", "1/5"], 1, "0.125 equals 125/1000, which simplifies to 1/8."],

        ["What is the slope of a horizontal line?", ["0", "1", "Undefined", "-1"], 0, "A horizontal line has no vertical change, so its slope is zero."],

        ["Find the simple interest on ₦1,000 at 5% per year for 2 years.", ["₦50", "₦100", "₦150", "₦200"], 1, "Simple interest is PRT/100 = 1000 × 5 × 2 / 100 = ₦100."],

        ["What is the value of sin 30°?", ["0", "1/2", "√2/2", "1"], 1, "The standard trigonometric value of sin 30 degrees is 1/2."],

        ["Solve: 2x − 5 = 13.", ["4", "8", "9", "10"], 2, "Add 5 to get 2x = 18, then divide by 2."],

        ["What is the mode of 2, 3, 3, 4, 5, 3, 6?", ["2", "3", "4", "6"], 1, "The mode is the most frequent value, which is 3."],

        ["What is the area of a circle with radius 3 cm?", ["3π cm²", "6π cm²", "9π cm²", "12π cm²"], 2, "Area equals πr², giving 9π square centimetres."],

        ["If two angles in a triangle are 50° and 60°, what is the third angle?", ["60°", "70°", "80°", "90°"], 1, "180° − 50° − 60° = 70°."],

        ["What is the value of log₁₀(100)?", ["1", "2", "10", "100"], 1, "10 raised to the power 2 equals 100."],

        ["A bag contains 3 red and 2 blue balls. What is the probability of choosing a red ball?", ["2/5", "3/5", "1/2", "3/2"], 1, "There are 3 red balls among 5 equally likely choices."],

        ["What is the sum of the first 10 positive integers?", ["45", "50", "55", "60"], 2, "Using n(n + 1)/2 gives 10 × 11 / 2 = 55."],

        ["Solve the simultaneous equations x + y = 10 and x − y = 2.", ["x = 4, y = 6", "x = 6, y = 4", "x = 5, y = 5", "x = 8, y = 2"], 1, "Adding the equations gives 2x = 12, so x = 6 and y = 4."],

        ["What is the value of cos 60°?", ["0", "1/2", "√3/2", "1"], 1, "The standard value of cos 60 degrees is 1/2."],

        ["A car travels 150 km in 3 hours. What is its average speed?", ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], 2, "Average speed equals distance divided by time: 150/3 = 50 km/h."],

        ["What is the determinant of the matrix [[2, 1], [3, 4]]?", ["5", "6", "8", "11"], 0, "The determinant is (2 × 4) − (1 × 3) = 5."]

    ]),

    // ==========================================
    // MATHEMATICS — ADVANCED
    // ==========================================

    ...createQuestions("mathematics", "advanced", [

        ["What is the derivative of x³ with respect to x?", ["x²", "2x²", "3x²", "3x"], 2, "The power rule gives d(x³)/dx = 3x²."],

        ["Evaluate the integral of 2x with respect to x.", ["x² + C", "2x² + C", "2 + C", "x + C"], 0, "The antiderivative of 2x is x² + C."],

        ["What is the limit of (x² − 4)/(x − 2) as x approaches 2?", ["0", "2", "4", "Undefined"], 2, "Factor the numerator as (x − 2)(x + 2); the limit is 4."],

        ["What are the eigenvalues of the diagonal matrix [[3, 0], [0, 5]]?", ["0 and 8", "3 and 5", "1 and 15", "-3 and -5"], 1, "The eigenvalues of a diagonal matrix are its diagonal entries."],

        ["What is the sum of the infinite geometric series with first term 8 and common ratio 1/2?", ["8", "12", "16", "24"], 2, "For |r| < 1, the sum is a/(1 − r) = 8/(1 − 1/2) = 16."],

        ["What is the derivative of sin x?", ["−sin x", "cos x", "−cos x", "tan x"], 1, "The derivative of sin x is cos x."],

        ["Evaluate the determinant of [[1, 2], [3, 4]].", ["-2", "2", "10", "−10"], 0, "The determinant is 1 × 4 − 2 × 3 = −2."],

        ["If f(x) = e^(2x), what is f'(x)?", ["e^(2x)", "2e^(2x)", "2xe^(2x)", "e^x"], 1, "The chain rule gives 2e^(2x)."],

        ["What is the probability of getting exactly two heads in three fair coin tosses?", ["1/8", "1/4", "3/8", "1/2"], 2, "Three of the eight equally likely sequences contain exactly two heads."],

        ["What is the value of the complex number i²?", ["1", "-1", "i", "−i"], 1, "By definition, the imaginary unit satisfies i² = −1."],

        ["Which condition guarantees that a square matrix has an inverse?", ["Its determinant is zero", "Its determinant is nonzero", "All entries are positive", "It is diagonal"], 1, "A square matrix is invertible exactly when its determinant is nonzero."],

        ["What is the derivative of ln x for x > 0?", ["x", "1/x", "ln x", "e^x"], 1, "The derivative of the natural logarithm is 1/x."],

        ["What is the value of the definite integral of 1 from 0 to 5?", ["0", "1", "5", "10"], 2, "The integral represents the area of a rectangle with width 5 and height 1."],

        ["What is the standard deviation the square root of?", ["The mean", "The variance", "The median", "The range"], 1, "Standard deviation is defined as the square root of variance."],

        ["If two events A and B are independent, what is P(A ∩ B)?", ["P(A) + P(B)", "P(A) − P(B)", "P(A)P(B)", "P(A)/P(B)"], 2, "For independent events, the probability of both occurring is the product of their probabilities."],

        ["What is the Taylor series expansion of e^x about x = 0?", ["1 + x + x²/2! + x³/3! + ...", "x + x² + x³ + ...", "1 − x + x² − ...", "1 + x²/2 + x⁴/4! + ..."], 0, "The Maclaurin series for e^x is the sum of x^n/n! for n from zero to infinity."],

        ["What is the rank of the identity matrix of order 4?", ["1", "2", "3", "4"], 3, "An identity matrix of order 4 has four linearly independent rows and columns."],

        ["What is the derivative of x² sin x?", ["2x cos x", "2x sin x + x² cos x", "x² cos x", "2x sin x − x² cos x"], 1, "The product rule gives 2x sin x + x² cos x."],

        ["What is the sum of the first n terms of an arithmetic progression?", ["n(a + d)", "n/2[2a + (n − 1)d]", "a × d^n", "a/(1 − d)"], 1, "The arithmetic-series sum is n/2 times the sum of the first and last terms."],

        ["Which theorem relates a function's derivative to its average rate of change over an interval?", ["Pythagorean theorem", "Mean Value Theorem", "Bayes' theorem", "Fermat's little theorem"], 1, "The Mean Value Theorem guarantees a point where the instantaneous derivative equals the interval's average rate of change, under its conditions."],

        ["What is the value of 5!?", ["25", "60", "100", "120"], 3, "5 factorial is 5 × 4 × 3 × 2 × 1 = 120."],

        ["What is the expected value of a fair six-sided die roll?", ["3", "3.5", "4", "6"], 1, "The mean is (1 + 2 + 3 + 4 + 5 + 6)/6 = 3.5."],

        ["What is the general solution to dy/dx = 3x²?", ["y = 3x + C", "y = x³ + C", "y = 6x + C", "y = x² + C"], 1, "Integrating 3x² with respect to x gives x³ + C."],

        ["If a matrix has two identical rows, what is its determinant?", ["1", "−1", "0", "It must be positive"], 2, "A matrix with linearly dependent rows has determinant zero."],

        ["What is the derivative of arctan x?", ["1/(1 + x²)", "1/√(1 − x²)", "1/x", "1 − x²"], 0, "The derivative of inverse tangent is 1/(1 + x²)."]

    ]),

    // ==========================================
    // GENERAL SCIENCE — BEGINNER
    // ==========================================

    ...createQuestions("science", "beginner", [

        ["Which organ pumps blood around the human body?", ["Lungs", "Heart", "Liver", "Kidneys"], 1, "The heart pumps blood through the circulatory system."],

        ["What gas do humans need for cellular respiration?", ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], 1, "Human cells use oxygen in aerobic cellular respiration."],

        ["What is the basic unit of life?", ["Atom", "Tissue", "Cell", "Organ"], 2, "The cell is the smallest structural and functional unit of living organisms."],

        ["Which planet is known as the Red Planet?", ["Venus", "Mars", "Jupiter", "Mercury"], 1, "Mars appears reddish because of iron oxide on its surface."],

        ["What is the chemical formula for water?", ["CO₂", "O₂", "H₂O", "NaCl"], 2, "A water molecule contains two hydrogen atoms and one oxygen atom."],

        ["Which part of a plant absorbs most water from the soil?", ["Flower", "Leaf", "Root", "Stem"], 2, "Roots absorb water and minerals from the soil."],

        ["Which vitamin can the human body produce in the skin through sunlight exposure?", ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], 2, "UVB exposure helps the skin synthesize vitamin D."],

        ["What is the boiling point of pure water at standard atmospheric pressure?", ["0°C", "50°C", "100°C", "150°C"], 2, "Pure water boils at approximately 100°C at one atmosphere of pressure."],

        ["Which blood cells help fight infections?", ["Red blood cells", "White blood cells", "Platelets", "Plasma cells only"], 1, "White blood cells are key components of the immune system."],

        ["Which gas do plants absorb during photosynthesis?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], 1, "Plants use carbon dioxide as a carbon source during photosynthesis."],

        ["Which organ is primarily responsible for filtering blood to produce urine?", ["Heart", "Lungs", "Kidneys", "Stomach"], 2, "The kidneys filter blood and regulate fluid and electrolyte balance."],

        ["What is the hardest natural substance commonly found in the human body?", ["Bone", "Tooth enamel", "Cartilage", "Nail"], 1, "Tooth enamel is the hardest substance in the human body."],

        ["Which state of matter has a fixed shape and fixed volume?", ["Gas", "Liquid", "Solid", "Plasma"], 2, "Solids generally retain both their shape and volume."],

        ["What force pulls objects toward the Earth?", ["Magnetism", "Gravity", "Friction", "Tension"], 1, "Earth's gravitational attraction pulls objects toward its center."],

        ["Which animal is a mammal?", ["Crocodile", "Frog", "Dolphin", "Eagle"], 2, "Dolphins are mammals that breathe air and nurse their young."],

        ["Which organ is mainly responsible for breathing?", ["Liver", "Lungs", "Pancreas", "Spleen"], 1, "The lungs exchange oxygen and carbon dioxide with the blood."],

        ["What is the center of an atom called?", ["Electron cloud", "Nucleus", "Molecule", "Orbit"], 1, "An atom's nucleus contains protons and neutrons."],

        ["Which nutrient is the body's main immediate energy source?", ["Carbohydrates", "Vitamins", "Water", "Minerals"], 0, "Carbohydrates are commonly broken down to provide glucose for energy."],

        ["Which planet is the largest in the Solar System?", ["Earth", "Saturn", "Jupiter", "Neptune"], 2, "Jupiter is the largest planet in the Solar System."],

        ["What is the process by which liquid water changes into water vapor?", ["Condensation", "Freezing", "Evaporation", "Melting"], 2, "Evaporation changes liquid water into vapor at the surface."],

        ["Which part of the eye controls how much light enters?", ["Retina", "Iris", "Cornea", "Optic nerve"], 1, "The iris adjusts pupil size to regulate incoming light."],

        ["What is the main function of red blood cells?", ["Fight bacteria", "Carry oxygen", "Digest food", "Produce hormones"], 1, "Red blood cells transport oxygen using hemoglobin."],

        ["Which scientist is associated with the laws of motion?", ["Isaac Newton", "Charles Darwin", "Louis Pasteur", "Gregor Mendel"], 0, "Isaac Newton formulated the three classical laws of motion."],

        ["Which of these is a renewable energy source?", ["Coal", "Natural gas", "Solar energy", "Petroleum"], 2, "Solar energy is replenished continuously by sunlight."],

        ["What is the natural satellite of Earth?", ["Mars", "The Moon", "The Sun", "Venus"], 1, "The Moon is Earth's natural satellite."]

    ]),

    // ==========================================
    // GENERAL SCIENCE — INTERMEDIATE
    // ==========================================

    ...createQuestions("science", "intermediate", [

        ["Which organelle is the main site of aerobic respiration in eukaryotic cells?", ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"], 1, "Mitochondria generate much of a eukaryotic cell's ATP through aerobic respiration."],

        ["What is the pH of a neutral aqueous solution at 25°C?", ["0", "5", "7", "14"], 2, "At 25°C, a neutral solution has pH 7."],

        ["Which blood type is considered the universal red-cell donor in the ABO and Rh systems?", ["AB positive", "O negative", "A positive", "B negative"], 1, "O-negative red cells lack A, B and Rh(D) antigens, making them the standard universal red-cell donor type."],

        ["What is the function of ribosomes?", ["ATP storage", "Protein synthesis", "Lipid digestion", "DNA replication only"], 1, "Ribosomes translate messenger RNA into proteins."],

        ["Which molecule carries hereditary information in most living organisms?", ["ATP", "DNA", "Glucose", "Cellulose"], 1, "DNA stores genetic instructions in most organisms."],

        ["What is the chemical symbol for sodium?", ["S", "So", "Na", "N"], 2, "Na is derived from the Latin name natrium."],

        ["Which type of bond involves the sharing of electron pairs?", ["Ionic", "Covalent", "Metallic only", "Hydrogen only"], 1, "Covalent bonds form when atoms share electron pairs."],

        ["Which layer of the atmosphere contains most of the ozone layer?", ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], 1, "Most atmospheric ozone is concentrated in the stratosphere."],

        ["Which process produces genetically identical daughter cells for growth and repair?", ["Meiosis", "Mitosis", "Fertilization", "Mutation"], 1, "Mitosis generally produces two genetically similar daughter cells."],

        ["What is the main role of enzymes in biochemical reactions?", ["Increase activation energy", "Lower activation energy", "Change the final equilibrium", "Become the main product"], 1, "Enzymes speed reactions by lowering activation energy without being consumed."],

        ["Which part of the nervous system includes the brain and spinal cord?", ["Peripheral nervous system", "Central nervous system", "Autonomic nerves only", "Somatic muscles"], 1, "The central nervous system consists of the brain and spinal cord."],

        ["What is the main gas in Earth's atmosphere?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], 2, "Nitrogen makes up approximately 78% of dry air."],

        ["Which scientist proposed the theory of natural selection?", ["Gregor Mendel", "Charles Darwin", "Marie Curie", "Alexander Fleming"], 1, "Charles Darwin explained evolution by natural selection."],

        ["What is the functional unit of the kidney?", ["Neuron", "Nephron", "Alveolus", "Villus"], 1, "Nephrons filter blood and help form urine."],

        ["Which type of chemical reaction releases heat to its surroundings?", ["Endothermic", "Exothermic", "Neutralization only", "Photolytic"], 1, "Exothermic reactions transfer energy to the surroundings, often as heat."],

        ["Which component of blood is mainly responsible for clot formation?", ["Plasma", "Platelets", "Red blood cells", "Antibodies"], 1, "Platelets help initiate blood clotting."],

        ["What is the main function of chlorophyll in plants?", ["Absorb light energy", "Absorb nitrogen gas", "Transport sugars", "Store genetic information"], 0, "Chlorophyll absorbs light energy used in photosynthesis."],

        ["Which molecule is the main immediate energy currency of cells?", ["DNA", "ATP", "RNA", "Starch"], 1, "ATP transfers usable chemical energy for cellular processes."],

        ["What is the term for the movement of water across a selectively permeable membrane?", ["Diffusion", "Osmosis", "Active transport", "Filtration only"], 1, "Osmosis is the net movement of water across a selectively permeable membrane."],

        ["Which type of microorganism lacks a membrane-bound nucleus?", ["Fungus", "Bacterium", "Animal cell", "Plant cell"], 1, "Bacteria are prokaryotes and lack a membrane-bound nucleus."],

        ["Which gas is commonly released during alcoholic fermentation by yeast?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 1, "Yeast fermentation of sugars releases carbon dioxide and ethanol."],

        ["Which structure controls the movement of substances into and out of a cell?", ["Cell membrane", "Nucleolus", "Chromosome", "Ribosome"], 0, "The cell membrane regulates movement between the cell and its environment."],

        ["What is the SI unit of amount of substance?", ["Gram", "Mole", "Litre", "Newton"], 1, "The mole is the SI base unit for amount of substance."],

        ["Which vitamin is essential for normal blood clotting?", ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"], 2, "Vitamin K is required for the production of several clotting proteins."],

        ["What is the main cause of tides on Earth?", ["Solar radiation", "Gravitational pull of the Moon and Sun", "Earth's magnetic field", "Ocean temperature"], 1, "Tides are mainly caused by lunar gravity, with solar gravity also contributing."]

    ]),

    // ==========================================
    // GENERAL SCIENCE — ADVANCED
    // ==========================================

    ...createQuestions("science", "advanced", [

        ["Which enzyme unwinds the DNA double helix during replication?", ["DNA ligase", "Helicase", "DNA polymerase", "Primase"], 1, "Helicase separates the DNA strands by disrupting hydrogen bonds."],

        ["In Michaelis-Menten kinetics, what does Km represent?", ["Maximum enzyme concentration", "Substrate concentration at half Vmax", "Total product formed", "Enzyme denaturation temperature"], 1, "Km is the substrate concentration at which reaction velocity is half of Vmax under the model's assumptions."],

        ["Which cellular process converts an mRNA sequence into an amino acid sequence?", ["Replication", "Transcription", "Translation", "Recombination"], 2, "Translation uses ribosomes to decode mRNA into a polypeptide."],

        ["What is the approximate number of chromosomes in a normal human somatic cell?", ["23", "44", "46", "48"], 2, "Most human somatic cells contain 46 chromosomes arranged in 23 pairs."],

        ["Which type of mutation changes a codon into a stop codon?", ["Silent mutation", "Nonsense mutation", "Inversion", "Duplication"], 1, "A nonsense mutation introduces a premature stop codon."],

        ["Which immunoglobulin class is usually the first produced in a primary immune response?", ["IgA", "IgE", "IgG", "IgM"], 3, "IgM is generally the first antibody class secreted in a primary response."],

        ["What is the role of NADH in cellular respiration?", ["It stores genetic code", "It carries high-energy electrons", "It breaks down cell walls", "It forms ribosomes"], 1, "NADH transfers high-energy electrons to the electron transport chain."],

        ["Which phase of mitosis involves chromosomes aligning at the cell's equatorial plane?", ["Prophase", "Metaphase", "Anaphase", "Telophase"], 1, "During metaphase, chromosomes align at the metaphase plate."],

        ["Which ecological relationship benefits one species while harming the other?", ["Mutualism", "Commensalism", "Parasitism", "Neutralism"], 2, "Parasitism benefits the parasite while harming the host."],

        ["What is the Hardy-Weinberg equation for two alleles in a population?", ["p + q = 2", "p² + 2pq + q² = 1", "p² − q² = 1", "p + q² = 0"], 1, "For two alleles, genotype frequencies under Hardy-Weinberg equilibrium sum to p² + 2pq + q² = 1."],

        ["Which thermodynamic law states that energy is conserved?", ["Zeroth law", "First law", "Second law", "Third law"], 1, "The first law of thermodynamics expresses conservation of energy."],

        ["Which molecular geometry is associated with an sp³-hybridized carbon atom with four bonding pairs?", ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"], 2, "Four electron domains around an sp³ carbon produce tetrahedral geometry."],

        ["What is the approximate pH of a 1 × 10⁻³ M strong monoprotic acid solution?", ["1", "2", "3", "11"], 2, "A fully dissociated 10⁻³ M strong acid has pH approximately 3."],

        ["Which RNA molecule carries amino acids to the ribosome?", ["mRNA", "rRNA", "tRNA", "snRNA"], 2, "Transfer RNA carries specific amino acids and matches anticodons with mRNA codons."],

        ["Which process produces four haploid cells from one diploid cell?", ["Mitosis", "Meiosis", "Binary fission", "Budding"], 1, "Meiosis involves two divisions and typically produces four haploid cells."],

        ["What is the primary role of the sodium-potassium pump in animal cells?", ["Produce DNA", "Maintain electrochemical ion gradients", "Synthesize glucose", "Digest proteins"], 1, "The Na⁺/K⁺ ATPase uses ATP to move sodium out and potassium into cells."],

        ["Which type of inhibition can be overcome by increasing substrate concentration in the simple Michaelis-Menten model?", ["Pure noncompetitive", "Competitive", "Irreversible", "Uncompetitive"], 1, "Competitive inhibitors compete for the active site, so high substrate concentration can reduce their effect."],

        ["Which region of an antibody binds a specific antigen?", ["Constant region only", "Variable region", "Fc region only", "Hinge region only"], 1, "The variable regions form the antigen-binding sites."],

        ["Which process allows bacteria to exchange genetic material through direct cell-to-cell contact?", ["Transduction", "Conjugation", "Translation", "Sporulation"], 1, "Bacterial conjugation transfers DNA through direct contact, often involving a pilus."],

        ["What does a lower activation energy generally do to a chemical reaction rate?", ["Slows it", "Increases it", "Stops it", "Changes the equilibrium constant automatically"], 1, "Lower activation energy allows a greater fraction of molecules to react at a given temperature."],

        ["Which part of the nephron is primarily responsible for establishing the medullary osmotic gradient?", ["Glomerulus", "Loop of Henle", "Bowman's capsule", "Proximal tubule only"], 1, "The loop of Henle's countercurrent mechanism helps establish the medullary osmotic gradient."],

        ["Which form of natural selection favors individuals at both extremes of a trait distribution?", ["Directional selection", "Stabilizing selection", "Disruptive selection", "Artificial selection"], 2, "Disruptive selection favors both extremes over intermediate phenotypes."],

        ["Which molecule is the final electron acceptor in aerobic mitochondrial respiration?", ["Carbon dioxide", "Oxygen", "Glucose", "NADH"], 1, "Oxygen accepts electrons at the end of the electron transport chain and forms water."],

        ["What is the main function of telomerase?", ["Repair ribosomes", "Extend telomeric DNA", "Unwind RNA", "Digest proteins"], 1, "Telomerase adds repetitive DNA sequences to chromosome ends."],

        ["Which statistical test is commonly used to assess association between two categorical variables?", ["Paired t-test", "Chi-square test of independence", "Pearson correlation only", "Linear regression only"], 1, "The chi-square test of independence evaluates association between categorical variables."]

    ]),

    // ==========================================
    // PHYSICS — BEGINNER
    // ==========================================

    ...createQuestions("physics", "beginner", [

        ["What is the SI unit of force?", ["Joule", "Newton", "Watt", "Pascal"], 1, "Force is measured in newtons."],

        ["What is the speed of light in a vacuum approximately?", ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"], 1, "Light travels at approximately 3 × 10⁸ metres per second in a vacuum."],

        ["Which instrument measures temperature?", ["Barometer", "Thermometer", "Ammeter", "Voltmeter"], 1, "A thermometer measures temperature."],

        ["What is the SI unit of energy?", ["Newton", "Watt", "Joule", "Ampere"], 2, "Energy is measured in joules."],

        ["Which type of energy does a moving object possess?", ["Potential energy", "Kinetic energy", "Chemical energy", "Nuclear energy"], 1, "Kinetic energy is the energy associated with motion."],

        ["What is the approximate acceleration due to gravity near Earth's surface?", ["4.9 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"], 1, "The standard approximate gravitational acceleration is 9.8 m/s²."],

        ["Which device measures electric current?", ["Voltmeter", "Ammeter", "Thermometer", "Hygrometer"], 1, "An ammeter measures electric current."],

        ["What happens to light when it passes from air into glass and changes direction?", ["Reflection", "Refraction", "Diffusion", "Absorption only"], 1, "Refraction is the change in direction caused by a change in wave speed."],

        ["What is the SI unit of electric current?", ["Volt", "Ohm", "Ampere", "Coulomb"], 2, "Electric current is measured in amperes."],

        ["Which simple machine consists of a wheel with a grooved rim and a rope?", ["Lever", "Pulley", "Wedge", "Screw"], 1, "A pulley uses a wheel and rope to change the direction or magnitude of force."],

        ["What is the relationship between distance, speed and time?", ["Speed = distance × time", "Speed = distance / time", "Speed = time / distance", "Distance = speed / time"], 1, "Average speed is calculated by dividing distance by time."],

        ["Which material is generally a good conductor of electricity?", ["Rubber", "Glass", "Copper", "Wood"], 2, "Copper has high electrical conductivity."],

        ["What is the unit of frequency?", ["Hertz", "Newton", "Joule", "Tesla"], 0, "Frequency is measured in hertz, or cycles per second."],

        ["What type of lens is thicker at the center than at the edges?", ["Concave lens", "Convex lens", "Plane mirror", "Cylindrical mirror"], 1, "A convex lens is generally thicker at the center and converges parallel rays."],

        ["What happens to the pressure of a gas if its volume decreases at constant temperature?", ["It decreases", "It increases", "It becomes zero", "It remains unchanged"], 1, "Boyle's law states that pressure increases as volume decreases at constant temperature for a fixed amount of gas."],

        ["Which force opposes motion between surfaces in contact?", ["Gravity", "Friction", "Magnetism", "Buoyancy"], 1, "Friction acts to oppose relative motion or attempted motion between surfaces."],

        ["What is the SI unit of power?", ["Joule", "Watt", "Volt", "Newton"], 1, "Power is the rate of energy transfer and is measured in watts."],

        ["Which pole of a magnet attracts the north pole of another magnet?", ["North pole", "South pole", "Both poles equally", "Neither pole"], 1, "Unlike magnetic poles attract each other."],

        ["What is the approximate value of atmospheric pressure at sea level?", ["10 kPa", "50 kPa", "101.3 kPa", "500 kPa"], 2, "Standard atmospheric pressure is approximately 101.3 kilopascals."],

        ["Which type of wave requires a medium to travel?", ["Electromagnetic wave", "Mechanical wave", "Light wave", "Radio wave"], 1, "Mechanical waves require a material medium for propagation."],

        ["What is the main function of a fuse in an electrical circuit?", ["Increase voltage", "Protect against excessive current", "Store charge", "Measure resistance"], 1, "A fuse melts and breaks the circuit when current becomes excessive."],

        ["What is the SI unit of electric resistance?", ["Ampere", "Volt", "Ohm", "Watt"], 2, "Electrical resistance is measured in ohms."],

        ["Which law states that every action has an equal and opposite reaction?", ["Newton's first law", "Newton's second law", "Newton's third law", "Law of gravitation"], 2, "Newton's third law describes equal and opposite interaction forces."],

        ["What is the approximate frequency of ordinary household AC electricity in Nigeria?", ["25 Hz", "50 Hz", "60 Hz", "100 Hz"], 1, "Nigeria's standard mains frequency is 50 Hz."],

        ["What is the main source of energy for Earth's climate system?", ["The Moon", "The Sun", "Earth's core", "Ocean tides"], 1, "Solar radiation is the main energy input driving Earth's climate system."]

    ]),

    // ==========================================
    // PHYSICS — INTERMEDIATE
    // ==========================================

    ...createQuestions("physics", "intermediate", [

        ["A 2 kg object accelerates at 3 m/s². What net force acts on it?", ["2 N", "5 N", "6 N", "9 N"], 2, "Newton's second law gives F = ma = 2 × 3 = 6 N."],

        ["What is the kinetic energy of a 2 kg object moving at 4 m/s?", ["8 J", "16 J", "24 J", "32 J"], 1, "Kinetic energy is 1/2 mv² = 1/2 × 2 × 16 = 16 J."],

        ["A 12 V battery is connected to a 4 Ω resistor. What current flows?", ["2 A", "3 A", "4 A", "8 A"], 1, "Ohm's law gives I = V/R = 12/4 = 3 A."],

        ["What is the equivalent resistance of two 6 Ω resistors connected in parallel?", ["3 Ω", "6 Ω", "12 Ω", "18 Ω"], 0, "For two equal resistors in parallel, the equivalent resistance is half: 3 Ω."],

        ["A wave has frequency 5 Hz and wavelength 2 m. What is its speed?", ["2.5 m/s", "7 m/s", "10 m/s", "15 m/s"], 2, "Wave speed equals frequency multiplied by wavelength: 5 × 2 = 10 m/s."],

        ["What is the momentum of a 3 kg object moving at 4 m/s?", ["7 kg m/s", "12 kg m/s", "16 kg m/s", "24 kg m/s"], 1, "Momentum equals mass multiplied by velocity: 3 × 4 = 12 kg m/s."],

        ["What is the SI unit of magnetic flux?", ["Tesla", "Weber", "Henry", "Farad"], 1, "Magnetic flux is measured in webers."],

        ["Which principle explains why a body immersed in fluid experiences an upward buoyant force?", ["Pascal's principle", "Archimedes' principle", "Bernoulli's principle", "Hooke's law"], 1, "Archimedes' principle relates buoyant force to the weight of displaced fluid."],

        ["What is the work done when a 10 N force moves an object 3 m in the force direction?", ["10 J", "13 J", "30 J", "60 J"], 2, "Work equals force multiplied by displacement in the direction of the force: 30 J."],

        ["A 100 W lamp operates for 10 seconds. How much energy does it use?", ["10 J", "100 J", "1,000 J", "10,000 J"], 2, "Energy equals power multiplied by time: 100 × 10 = 1,000 J."],

        ["What happens to the image formed by a plane mirror?", ["It is real and inverted", "It is virtual and upright", "It is always enlarged", "It is always diminished"], 1, "A plane mirror forms a virtual, upright image of equal size."],

        ["Which equation relates pressure, force and area?", ["P = F/A", "P = FA", "P = A/F", "P = F + A"], 0, "Pressure equals the perpendicular force divided by area."],

        ["What is the acceleration of an object moving at constant velocity?", ["0 m/s²", "1 m/s²", "9.8 m/s²", "It depends only on mass"], 0, "Constant velocity means no change in velocity, so acceleration is zero."],

        ["What is the equivalent capacitance of two 2 F capacitors connected in parallel?", ["1 F", "2 F", "4 F", "8 F"], 2, "Capacitances in parallel add directly: 2 + 2 = 4 F."],

        ["Which law relates the pressure and volume of a fixed amount of gas at constant temperature?", ["Charles's law", "Boyle's law", "Ohm's law", "Faraday's law"], 1, "Boyle's law states that pressure is inversely proportional to volume at constant temperature."],

        ["What is the period of a wave with frequency 20 Hz?", ["0.02 s", "0.05 s", "0.2 s", "2 s"], 1, "Period equals 1/f = 1/20 = 0.05 seconds."],

        ["A 5 kg object is lifted 2 m. Approximately how much gravitational potential energy does it gain? Use g = 10 m/s².", ["10 J", "50 J", "100 J", "200 J"], 2, "Potential energy gain is mgh = 5 × 10 × 2 = 100 J."],

        ["What is the focal length of a lens with power +2 dioptres?", ["0.25 m", "0.5 m", "2 m", "4 m"], 1, "Lens power P = 1/f, so f = 1/2 = 0.5 m."],

        ["What is the direction of the magnetic field around a straight current-carrying wire?", ["Radially outward", "Concentric circles", "Straight along the wire", "No magnetic field"], 1, "The magnetic field forms concentric circles around a straight current-carrying conductor."],

        ["What is the efficiency of a machine that gives 80 J useful output from 100 J input?", ["20%", "50%", "80%", "125%"], 2, "Efficiency = output/input × 100 = 80%."],

        ["Which quantity remains conserved in an isolated system during an elastic collision?", ["Momentum only", "Kinetic energy only", "Both momentum and kinetic energy", "Neither"], 2, "Elastic collisions conserve total momentum and total kinetic energy."],

        ["A 4 Ω resistor carries a current of 2 A. What is the power dissipated?", ["4 W", "8 W", "16 W", "32 W"], 2, "Power is I²R = 2² × 4 = 16 W."],

        ["What is the refractive index if light travels at 2 × 10⁸ m/s in a medium? Use c = 3 × 10⁸ m/s.", ["1.0", "1.2", "1.5", "2.0"], 2, "Refractive index n = c/v = 3/2 = 1.5."],

        ["What is the angular speed of an object completing one revolution in 2 seconds?", ["π/2 rad/s", "π rad/s", "2π rad/s", "4π rad/s"], 1, "Angular speed equals 2π/T = 2π/2 = π rad/s."],

        ["Which law states that induced electromotive force opposes the change in magnetic flux that produces it?", ["Ohm's law", "Lenz's law", "Coulomb's law", "Hooke's law"], 1, "Lenz's law gives the direction of induced current through its opposing effect."]

    ]),

    // ==========================================
    // PHYSICS — ADVANCED
    // ==========================================

    ...createQuestions("physics", "advanced", [

        ["What is the escape velocity from a spherical body of mass M and radius R, ignoring atmospheric effects?", ["√(GM/R)", "√(2GM/R)", "2GM/R", "GM/R²"], 1, "Escape velocity follows from equating kinetic energy to the gravitational binding energy per unit mass."],

        ["Which equation expresses the relativistic relationship between energy, momentum and rest mass?", ["E = mc²", "E² = (pc)² + (mc²)²", "F = ma", "p = mv²"], 1, "The energy-momentum relation is E² = p²c² + m²c⁴."],

        ["What is the approximate value of Planck's constant?", ["6.626 × 10⁻³⁴ J·s", "3.00 × 10⁸ J·s", "9.11 × 10⁻³¹ J·s", "1.60 × 10⁻¹⁹ J·s"], 0, "Planck's constant is approximately 6.626 × 10⁻³⁴ joule-seconds."],

        ["Which principle states that no two identical fermions can occupy the same quantum state?", ["Heisenberg uncertainty principle", "Pauli exclusion principle", "Correspondence principle", "Superposition principle"], 1, "The Pauli exclusion principle applies to identical fermions."],

        ["What is the SI unit of inductance?", ["Farad", "Henry", "Weber", "Tesla"], 1, "Inductance is measured in henries."],

        ["In simple harmonic motion, how is acceleration related to displacement from equilibrium?", ["Directly proportional and same direction", "Proportional and opposite direction", "Independent of displacement", "Always zero"], 1, "For SHM, acceleration is a = −ω²x, opposite to displacement."],

        ["What is the resonant angular frequency of an ideal LC circuit?", ["LC", "1/LC", "1/√(LC)", "√(LC)"], 2, "The ideal LC resonant angular frequency is ω₀ = 1/√(LC)."],

        ["Which equation describes the force between two point charges in vacuum?", ["Newton's law", "Coulomb's law", "Faraday's law", "Ampere's law"], 1, "Coulomb's law gives the electrostatic force between point charges."],

        ["What is the de Broglie wavelength of a particle with momentum p?", ["h/p", "p/h", "hp", "h²/p"], 0, "The de Broglie relation is λ = h/p."],

        ["Which Maxwell equation expresses the absence of isolated magnetic monopoles in classical electromagnetism?", ["Gauss's law for electricity", "Gauss's law for magnetism", "Faraday's law", "Ampere-Maxwell law"], 1, "Gauss's law for magnetism states that the net magnetic flux through a closed surface is zero."],

        ["What is the critical angle condition for total internal reflection?", ["Light travels from lower to higher refractive index", "Light travels from higher to lower refractive index and incidence exceeds the critical angle", "Light strikes at zero degrees", "The two media have identical refractive indices"], 1, "Total internal reflection requires light to approach the boundary from the higher-index medium at an angle greater than the critical angle."],

        ["Which law relates the induced EMF in a circuit to the rate of change of magnetic flux?", ["Faraday's law", "Ohm's law", "Hooke's law", "Snell's law"], 0, "Faraday's law states that induced EMF is related to the rate of change of magnetic flux."],

        ["What is the Schwarzschild radius of a non-rotating spherical mass M?", ["GM/c²", "2GM/c²", "GM/2c²", "c²/2GM"], 1, "The Schwarzschild radius is 2GM/c²."],

        ["In an ideal Carnot engine, what determines its maximum possible efficiency?", ["Working substance only", "Hot and cold reservoir temperatures", "Engine mass", "Cylinder volume only"], 1, "Carnot efficiency is 1 − Tc/Th, using absolute temperatures."],

        ["What is the uncertainty principle's position-momentum relation?", ["ΔxΔp ≥ ℏ/2", "ΔxΔp = 0", "Δx/Δp ≥ ℏ", "Δx + Δp ≥ ℏ"], 0, "The Heisenberg relation requires ΔxΔp to be at least ℏ/2."],

        ["What is the magnetic force on a moving charge q with velocity v in a magnetic field B?", ["qvB cos θ", "qvB sin θ", "qB/v", "qv/B"], 1, "The magnetic force magnitude is qvB sin θ, where θ is the angle between velocity and field."],

        ["Which quantity is the time derivative of angular momentum?", ["Power", "Torque", "Work", "Impulse"], 1, "Net torque equals the rate of change of angular momentum."],

        ["What is the ground-state energy of a one-dimensional infinite square well of width L for a particle of mass m?", ["h²/(8mL²)", "h²/(2mL)", "2mL²/h²", "h/(8mL)"], 0, "For an infinite well, the ground-state energy is h²/(8mL²)."],

        ["What does the divergence of the electric field represent in Gauss's law?", ["Magnetic circulation", "Electric charge density divided by permittivity", "Rate of change of magnetic flux", "Electric potential only"], 1, "In differential form, the divergence of E equals charge density divided by ε₀."],

        ["What is the quality factor Q of a lightly damped resonant system conceptually measuring?", ["Its mass", "Its resonance sharpness or energy stored relative to energy lost", "Its static displacement", "Its temperature"], 1, "A high Q indicates a narrow resonance and relatively low energy loss per cycle."],

        ["Which particle mediates the electromagnetic interaction in quantum electrodynamics?", ["Gluon", "Photon", "W boson", "Higgs boson"], 1, "The photon is the gauge boson of the electromagnetic interaction."],

        ["What is the Lorentz factor γ?", ["1 − v²/c²", "1/√(1 − v²/c²)", "√(1 − v²/c²)", "v/c"], 1, "The Lorentz factor is γ = 1/√(1 − v²/c²)."],

        ["For a series RLC circuit at resonance, what is the impedance magnitude?", ["Zero", "Equal to resistance R", "Infinite", "Equal to XL + XC"], 1, "At resonance, inductive and capacitive reactances cancel, leaving impedance R."],

        ["What is the relationship between the half-life T½ and decay constant λ in radioactive decay?", ["T½ = λ ln 2", "T½ = ln 2 / λ", "T½ = 1/λ²", "T½ = 2λ"], 1, "Radioactive half-life is ln 2 divided by the decay constant."],

        ["Which theorem relates the circulation of a vector field around a closed curve to the curl over a surface bounded by that curve?", ["Gauss's divergence theorem", "Stokes' theorem", "Pythagorean theorem", "Green's first law"], 1, "Stokes' theorem relates a line integral around a boundary to a surface integral of curl."]

    ])

];

console.log("HIFE.QUIZ question bank loaded:", window.questionBank.length);


/* =========================================
   HIFE.QUIZ — MAIN JAVASCRIPT ENGINE
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------
    // 1. ELEMENTS AND DEFAULT SETTINGS
    // -------------------------------------

    const categoryButtons = document.querySelectorAll(".category-card");
    const difficultyButtons = document.querySelectorAll(".difficulty-button");

    const startButton = document.getElementById("start-quiz");
    const selectionMessage = document.getElementById("selection-message");
    const currentYear = document.getElementById("current-year");

    const mainContent = document.querySelector(".main-content");

    const TOTAL_QUESTIONS = 25;
    const QUIZ_TIME = 25 * 60;

    let selectedCategory = null;
    let selectedDifficulty = "beginner";

    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let userAnswers = [];

    let timeRemaining = QUIZ_TIME;
    let timerInterval = null;
    let quizStarted = false;

    // -------------------------------------
    // 2. INITIAL PAGE SETTINGS
    // -------------------------------------

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // -------------------------------------
    // 3. CATEGORY SELECTION
    // -------------------------------------

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            categoryButtons.forEach(card => {
                card.classList.remove("active");
                card.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            selectedCategory = button.dataset.category;

            if (selectionMessage) {
                selectionMessage.textContent =
                    `Selected: ${button.querySelector("h3").textContent}`;
            }

        });

        button.setAttribute("aria-pressed", "false");

    });

    // -------------------------------------
    // 4. DIFFICULTY SELECTION
    // -------------------------------------

    difficultyButtons.forEach(button => {

        button.addEventListener("click", () => {

            difficultyButtons.forEach(level => {
                level.classList.remove("active");
                level.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            selectedDifficulty = button.dataset.difficulty;

        });

        button.setAttribute(
            "aria-pressed",
            button.classList.contains("active") ? "true" : "false"
        );

    });

    // -------------------------------------
    // 5. RANDOMIZE QUESTIONS
    // -------------------------------------

    function shuffleArray(array) {

        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] =
                [shuffled[j], shuffled[i]];

        }

        return shuffled;

    }

    // -------------------------------------
    // 6. GET QUESTIONS FROM QUESTION BANK
    // -------------------------------------

    function getQuestionBank() {

        if (!Array.isArray(window.questionBank)) {
            return [];
        }

        return window.questionBank;
    }

    function getRecentQuestionIds() {

        try {
            return JSON.parse(
                localStorage.getItem("hifeRecentQuestions")
            ) || {};
        } catch {
            return {};
        }

    }

    function saveRecentQuestionIds(key, ids) {

        const recent = getRecentQuestionIds();

        recent[key] = ids.slice(-50);

        localStorage.setItem(
            "hifeRecentQuestions",
            JSON.stringify(recent)
        );

    }

    function selectQuestions() {

        const bank = getQuestionBank();

        const category = selectedCategory;
        const difficulty = selectedDifficulty;

        let availableQuestions = bank.filter(question =>
            question.difficulty === difficulty
        );

        // Individual category selection
        if (category !== "mixed") {

            availableQuestions = availableQuestions.filter(question =>
                question.category === category
            );

        } else {

            // Mixed quiz: 15 Technology, 4 Mathematics,
            // 3 Science and 3 Physics questions.

            const requiredCounts = {
                technology: 15,
                mathematics: 4,
                science: 3,
                physics: 3
            };

            const selected = [];

            for (const [subject, count] of Object.entries(requiredCounts)) {

                const subjectQuestions = availableQuestions.filter(question =>
                    question.category === subject
                );

                if (subjectQuestions.length < count) {
                    return {
                        error: `Not enough ${subject} questions for this difficulty.`
                    };
                }

                selected.push(
                    ...shuffleArray(subjectQuestions).slice(0, count)
                );

            }

            return {
                questions: shuffleArray(selected)
            };

        }

        if (availableQuestions.length < TOTAL_QUESTIONS) {

            return {
                error: `Only ${availableQuestions.length} questions are available. You need ${TOTAL_QUESTIONS} for this quiz.`
            };

        }

        // Reduce repetition between recent attempts.
        const historyKey = `${category}_${difficulty}`;
        const recentIds = getRecentQuestionIds()[historyKey] || [];

        let freshQuestions = availableQuestions.filter(question =>
            !recentIds.includes(question.id)
        );

        // If the remaining fresh pool is too small,
        // allow older questions to appear again.
        if (freshQuestions.length < TOTAL_QUESTIONS) {
            freshQuestions = availableQuestions;
        }

        const selectedQuestions = shuffleArray(freshQuestions)
            .slice(0, TOTAL_QUESTIONS);

        saveRecentQuestionIds(
            historyKey,
            [...recentIds, ...selectedQuestions.map(q => q.id)]
        );

        return {
            questions: selectedQuestions
        };

    }

    // -------------------------------------
    // 7. START QUIZ
    // -------------------------------------

    startButton.addEventListener("click", () => {

        if (!selectedCategory) {

            selectionMessage.textContent =
                "Please select a category before starting.";

            return;

        }

        const result = selectQuestions();

        if (result.error) {

            selectionMessage.textContent = result.error;
            return;

        }

        quizQuestions = result.questions;

        userAnswers = quizQuestions.map(() => null);

        currentQuestionIndex = 0;
        timeRemaining = QUIZ_TIME;
        quizStarted = true;

        showQuizScreen();
        startTimer();

    });

    // -------------------------------------
    // 8. CREATE QUIZ SCREEN
    // -------------------------------------

    function showQuizScreen() {

        const setupSections = [
            ".welcome-section",
            ".quiz-section",
            ".configuration-section",
            ".footer"
        ];

        setupSections.forEach(selector => {

            const element = document.querySelector(selector);

            if (element) {
                element.style.display = "none";
            }

        });

        let quizScreen = document.getElementById("quiz-screen");

        if (!quizScreen) {

            quizScreen = document.createElement("section");

            quizScreen.id = "quiz-screen";
            quizScreen.className = "quiz-screen";

            mainContent.insertBefore(
                quizScreen,
                document.querySelector(".footer")
            );

        }

        quizScreen.style.display = "block";

        renderQuestion();

    }

    // -------------------------------------
    // 9. DISPLAY QUESTION
    // -------------------------------------

    function renderQuestion() {

        const quizScreen = document.getElementById("quiz-screen");

        const question = quizQuestions[currentQuestionIndex];

        const selectedAnswer = userAnswers[currentQuestionIndex];

        const answered = selectedAnswer !== null;

        const progress = (
            (currentQuestionIndex + 1) / TOTAL_QUESTIONS
        ) * 100;

        quizScreen.innerHTML = `

            <div class="quiz-top-bar">

                <button class="exit-quiz-button" id="exit-quiz">
                    ← Exit Quiz
                </button>

                <div class="quiz-timer" id="quiz-timer">
                    25:00
                </div>

            </div>

            <div class="quiz-progress">

                <div class="progress-info">
                    <span>QUESTION ${currentQuestionIndex + 1} OF ${TOTAL_QUESTIONS}</span>
                    <span>${Math.round(progress)}% COMPLETED</span>
                </div>

                <div class="progress-track">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>

            </div>

            <div class="question-card">

                <div class="question-meta">

                    <span>${question.category.toUpperCase()}</span>
                    <span>${question.difficulty.toUpperCase()}</span>

                </div>

                <h2 class="question-title">
                    ${escapeHTML(question.question)}
                </h2>

                <div class="answer-options">

                    ${question.options.map((option, index) => {

                        let stateClass = "";

                        if (answered && index === question.answer) {
                            stateClass = "correct-answer";
                        } else if (
                            answered &&
                            index === selectedAnswer &&
                            index !== question.answer
                        ) {
                            stateClass = "wrong-answer";
                        }

                        return `

                            <button
                                class="answer-option ${stateClass}"
                                data-answer="${index}"
                                ${answered ? "disabled" : ""}
                            >

                                <span class="option-letter">
                                    ${String.fromCharCode(65 + index)}
                                </span>

                                <span>${escapeHTML(option)}</span>

                            </button>

                        `;

                    }).join("")}

                </div>

                <div id="answer-feedback" class="answer-feedback">

                    ${answered ? getFeedback(question, selectedAnswer) : ""}

                </div>

                <div class="question-actions">

                    <button
                        class="skip-button"
                        id="skip-question"
                        ${answered ? "disabled" : ""}
                    >
                        Skip Question
                    </button>

                    <button
                        class="next-button"
                        id="next-question"
                        ${answered ? "" : "disabled"}
                    >
                        ${currentQuestionIndex === TOTAL_QUESTIONS - 1
                            ? "Finish Quiz"
                            : "Next Question →"}
                    </button>

                </div>

            </div>

        `;

        // Answer selection
        quizScreen.querySelectorAll(".answer-option").forEach(button => {

            button.addEventListener("click", () => {

                const answer = Number(button.dataset.answer);

                submitAnswer(answer);

            });

        });

        // Skip question
        document.getElementById("skip-question")
            .addEventListener("click", skipQuestion);

        // Next question
        document.getElementById("next-question")
            .addEventListener("click", nextQuestion);

        // Exit quiz
        document.getElementById("exit-quiz")
            .addEventListener("click", exitQuiz);

        updateTimerDisplay();

    }

    // -------------------------------------
    // 10. CHECK ANSWER
    // -------------------------------------

    function submitAnswer(answer) {

        if (userAnswers[currentQuestionIndex] !== null) {
            return;
        }

        userAnswers[currentQuestionIndex] = answer;

        renderQuestion();

    }

    // -------------------------------------
    // 11. ANSWER FEEDBACK
    // -------------------------------------

    function getFeedback(question, selectedAnswer) {

        const isCorrect = selectedAnswer === question.answer;

        const selectedText = question.options[selectedAnswer];
        const correctText = question.options[question.answer];

        if (isCorrect) {

            return `

                <div class="feedback-correct">

                    <strong>Correct Answer!</strong>

                    <p>${escapeHTML(question.explanation)}</p>

                </div>

            `;

        }

        return `

            <div class="feedback-wrong">

                <strong>Incorrect Answer</strong>

                <p>
                    Your answer:
                    <strong>${escapeHTML(selectedText)}</strong>
                </p>

                <p>
                    Correct answer:
                    <strong>${escapeHTML(correctText)}</strong>
                </p>

                <p>${escapeHTML(question.explanation)}</p>

            </div>

        `;

    }

    // -------------------------------------
    // 12. SKIP QUESTION
    // -------------------------------------

    function skipQuestion() {

        if (userAnswers[currentQuestionIndex] === null) {
            userAnswers[currentQuestionIndex] = "skipped";
        }

        nextQuestion();

    }

    // -------------------------------------
    // 13. NEXT QUESTION
    // -------------------------------------

    function nextQuestion() {

        if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {

            currentQuestionIndex++;

            renderQuestion();

        } else {

            finishQuiz();

        }

    }

    // -------------------------------------
    // 14. COUNTDOWN TIMER
    // -------------------------------------

    function startTimer() {

        clearInterval(timerInterval);

        timerInterval = setInterval(() => {

            if (!quizStarted) {
                return;
            }

            timeRemaining--;

            updateTimerDisplay();

            if (timeRemaining <= 0) {

                timeRemaining = 0;

                finishQuiz();

            }

        }, 1000);

    }

    function updateTimerDisplay() {

        const timer = document.getElementById("quiz-timer");

        if (!timer) return;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timer.textContent =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        timer.classList.toggle("timer-warning", timeRemaining <= 300);

    }

    // -------------------------------------
    // 15. CALCULATE RESULTS
    // -------------------------------------

    function calculateResults() {

        let correct = 0;
        let incorrect = 0;
        let skipped = 0;

        userAnswers.forEach((answer, index) => {

            if (answer === "skipped" || answer === null) {

                skipped++;

            } else if (answer === quizQuestions[index].answer) {

                correct++;

            } else {

                incorrect++;

            }

        });

        const percentage = Math.round(
            (correct / TOTAL_QUESTIONS) * 100
        );

        return {
            correct,
            incorrect,
            skipped,
            percentage
        };

    }

    // -------------------------------------
    // 16. FINISH QUIZ
    // -------------------------------------

    function finishQuiz() {

        if (!quizStarted) return;

        quizStarted = false;

        clearInterval(timerInterval);

        const results = calculateResults();

        const timeUsed = QUIZ_TIME - timeRemaining;

        saveAttempt(results, timeUsed);

        showResults(results, timeUsed);

    }

    // -------------------------------------
    // 17. SAVE ATTEMPT HISTORY
    // -------------------------------------

    function saveAttempt(results, timeUsed) {

        const attempt = {
            category: selectedCategory,
            difficulty: selectedDifficulty,
            score: results.correct,
            percentage: results.percentage,
            correct: results.correct,
            incorrect: results.incorrect,
            skipped: results.skipped,
            timeUsed,
            date: new Date().toISOString()
        };

        try {

            const history = JSON.parse(
                localStorage.getItem("hifeQuizHistory")
            ) || [];

            history.push(attempt);

            localStorage.setItem(
                "hifeQuizHistory",
                JSON.stringify(history.slice(-50))
            );

        } catch (error) {

            console.warn("Could not save quiz history:", error);

        }

    }

    // -------------------------------------
    // 18. RESULTS SCREEN
    // -------------------------------------

    function showResults(results, timeUsed) {

        const quizScreen = document.getElementById("quiz-screen");

        const minutes = Math.floor(timeUsed / 60);
        const seconds = timeUsed % 60;

        const categoryName = selectedCategory
            .replace("-", " ")
            .replace(/\b\w/g, letter => letter.toUpperCase());

        quizScreen.innerHTML = `

            <div class="results-container">

                <div class="results-heading">

                    <span class="section-tag">QUIZ COMPLETED</span>

                    <h2>Your Results</h2>

                    <p>You have completed your ${categoryName} challenge.</p>

                </div>

                <div class="score-card">

                    <span>YOUR SCORE</span>

                    <h1>${results.percentage}%</h1>

                    <p>${results.correct} out of ${TOTAL_QUESTIONS} correct answers</p>

                </div>

                <div class="results-grid">

                    <div class="result-stat">
                        <strong>${results.correct}</strong>
                        <span>Correct</span>
                    </div>

                    <div class="result-stat">
                        <strong>${results.incorrect}</strong>
                        <span>Incorrect</span>
                    </div>

                    <div class="result-stat">
                        <strong>${results.skipped}</strong>
                        <span>Skipped</span>
                    </div>

                    <div class="result-stat">
                        <strong>${minutes}:${String(seconds).padStart(2, "0")}</strong>
                        <span>Time Used</span>
                    </div>

                </div>

                <div class="results-actions">

                    <button class="review-button" id="review-answers">
                        Review Answers
                    </button>

                    <button class="restart-button" id="restart-quiz">
                        Try Again
                    </button>

                </div>

            </div>

            <div id="review-section" class="review-section"></div>

        `;

        document.getElementById("review-answers")
            .addEventListener("click", showAnswerReview);

        document.getElementById("restart-quiz")
            .addEventListener("click", restartQuiz);

    }

    // -------------------------------------
    // 19. DETAILED ANSWER REVIEW
    // -------------------------------------

    function showAnswerReview() {

        const reviewSection = document.getElementById("review-section");

        reviewSection.innerHTML = `

            <h2>Answer Review</h2>

            <p>Check your responses and learn from every mistake.</p>

            ${quizQuestions.map((question, index) => {

                const answer = userAnswers[index];

                const skipped = answer === "skipped" || answer === null;

                const correct = answer === question.answer;

                return `

                    <div class="review-card">

                        <span class="review-number">
                            QUESTION ${index + 1}
                        </span>

                        <h3>${escapeHTML(question.question)}</h3>

                        <p class="review-selected">

                            Your answer:

                            <strong>
                                ${skipped
                                    ? "Not answered"
                                    : escapeHTML(question.options[answer])}
                            </strong>

                        </p>

                        <p class="review-correct">

                            Correct answer:

                            <strong>
                                ${escapeHTML(question.options[question.answer])}
                            </strong>

                        </p>

                        <span class="review-status ${
                            skipped ? "status-skipped" :
                            correct ? "status-correct" : "status-wrong"
                        }">

                            ${skipped ? "Skipped" :
                              correct ? "Correct" : "Incorrect"}

                        </span>

                        <p class="review-explanation">
                            ${escapeHTML(question.explanation)}
                        </p>

                    </div>

                `;

            }).join("")}

        `;

        reviewSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    // -------------------------------------
    // 20. RESTART QUIZ
    // -------------------------------------

    function restartQuiz() {

        quizStarted = false;

        clearInterval(timerInterval);

        const quizScreen = document.getElementById("quiz-screen");

        if (quizScreen) {
            quizScreen.remove();
        }

        const setupSections = [
            ".welcome-section",
            ".quiz-section",
            ".configuration-section",
            ".footer"
        ];

        setupSections.forEach(selector => {

            const element = document.querySelector(selector);

            if (element) {
                element.style.display = "";
            }

        });

        selectedCategory = null;

        categoryButtons.forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        if (selectionMessage) {
            selectionMessage.textContent =
                "Select a category to begin your challenge.";
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    // -------------------------------------
    // 21. EXIT QUIZ
    // -------------------------------------

    function exitQuiz() {

        const confirmExit = window.confirm(
            "Are you sure you want to exit? Your current quiz progress will be lost."
        );

        if (confirmExit) {
            restartQuiz();
        }

    }

    // -------------------------------------
    // 22. PREVENT HTML INJECTION IN TEXT
    // -------------------------------------

    function escapeHTML(value) {

        return String(value).replace(/[&<>"']/g, character => {

            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            };

            return entities[character];

        });

    }

});
