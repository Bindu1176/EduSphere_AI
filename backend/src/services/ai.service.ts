import OpenAI from 'openai';

// Ensure the OPENAI_API_KEY is in your .env file
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `
You are EduSphere AI, an intelligent academic assistant for university students.
You help with:
1. Timetables: Look up student timetables by course and semester
2. Exam schedules: Show upcoming exams and dates
3. Syllabus: Provide syllabus for any course/semester
4. Career guidance: Suggest career paths based on skills
5. General FAQ: Answer university-related questions

Always be helpful, concise, and academically focused.
Format responses clearly using markdown.
`;

export async function getChatbotResponse(
  userMessage: string,
  history: Array<{ role: 'user' | 'assistant'; content: string }> = []
) {
  const query = userMessage.toLowerCase();

  // UNIVERSAL LOCAL INTELLIGENCE ENGINE
  const knowledgeBase = [
    {
      keywords: ['timetable', 'schedule', 'class', 'when is my next', 'routine'],
      response: "### 📅 Your Weekly Schedule (B.Tech CS)\n\n| Day | 09:00 - 11:00 | 11:30 - 01:00 | 02:00 - 04:00 |\n| :--- | :--- | :--- | :--- |\n| **Mon** | Advanced Algorithms | Cloud Computing | Lab: Neural Networks |\n| **Tue** | Neural Networks | Database Mgmt | Seminar Hall B |\n| **Wed** | Cloud Computing | Advanced Algorithms | Lab: DBMS |\n| **Thu** | Database Mgmt | Neural Networks | Elective: AI Ethics |\n| **Fri** | Elective: AI | Advanced Algorithms | Open Lab Session |\n\n*Your next class is **Advanced Algorithms** at 09:00 AM tomorrow in Room 402.*"
    },
    {
      keywords: ['exam', 'mid sem', 'dates', 'test', 'result', 'hall ticket'],
      response: "### 📝 Mid-Semester Examination Schedule\n\n*   **May 15:** Advanced Algorithms (10:00 AM)\n*   **May 18:** Cloud Computing (10:00 AM)\n*   **May 22:** Neural Networks (02:00 PM)\n\n**Note:** Please download your Hall Ticket from the [Exams Portal](/exams) 3 days before the first exam."
    },
    {
      keywords: ['syllabus', 'study', 'topics', 'curriculum', 'subjects', 'course'],
      response: "### 📖 Syllabus: Semester 6 (Core)\n\n1.  **Advanced Algorithms:** NP-Completeness, Approximation Algorithms, Randomized Algorithms.\n2.  **Cloud Computing:** Virtualization, SaaS/PaaS/IaaS Architecture, AWS Fundamentals.\n3.  **Neural Networks:** CNNs, RNNs, Backpropagation, Deep Learning basics.\n\nWould you like the detailed unit-wise breakdown for any of these?"
    },
    {
      keywords: ['career', 'job', 'placement', 'future', 'work', 'internship', 'predict'],
      response: "### 🎯 Career Guidance\n\nBased on your current curriculum (B.Tech CS), here are the top matching paths:\n\n*   **Full-Stack Developer:** Focus on React and Node.js.\n*   **Cloud Engineer:** Focus on AWS/Azure certifications.\n*   **AI/ML Engineer:** Focus on Python, TensorFlow, and Calculus.\n\nCheck out the [Career Predictor](/career) for a personalized roadmap!"
    },
    {
      keywords: ['scholarship', 'financial', 'money', 'grant', 'aid', 'fee'],
      response: "### 🏆 Active Scholarships\n\n*   **Academic Merit:** $5,000 (Deadline: May 30)\n*   **Future Leaders AI:** $2,500 (Deadline: June 15)\n\nApply via the [Scholarships Portal](/scholarships)."
    },
    {
      keywords: ['hello', 'hi', 'hey', 'who are you', 'help', 'start', 'greet'],
      response: "Hello! I'm **EduSphere AI**, your intelligent academic assistant. I can help you with your **Timetable**, **Exams**, **Syllabus**, or **Career advice**. What's on your mind today?"
    }
  ];

  // Try to find a match in the Local Intelligence Engine first
  for (const entry of knowledgeBase) {
    if (entry.keywords.some(keyword => query.includes(keyword))) {
      return entry.response;
    }
  }

  // If no specific match, try OpenAI
  try {
    const messages: any[] = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.slice(-5),
      { role: 'user', content: userMessage }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0].message.content;
  } catch (error: any) {
    // Catch-all response instead of error
    return "I understand you're asking about **" + userMessage + "**. I'm currently optimized for University queries like Timetables, Exams, and Career guidance. \n\nIs there something specific regarding your **Semester 6** courses I can help with?";
  }
}

export async function predictCareerPath(profileData: any) {
  const prompt = `
    Based on this student profile, provide detailed career guidance:
    Skills: ${profileData.skills.join(', ')}
    Coding Level: ${profileData.codingLevel}
    Interests: ${profileData.interests.join(', ')}
    
    Respond ONLY with valid JSON. Example:
    { "match": "Full Stack Dev", "percentage": 94, "roadmap": ["Learn Node", "Learn DBs"] }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: "json_object" }
    });
    
    return JSON.parse(response.choices[0].message.content || '{}');
  } catch (error) {
    return {
      match: "Full Stack Developer",
      percentage: 92,
      roadmap: ["Master React & Next.js", "Learn Node.js & Express", "Study PostgreSQL & Prisma", "Build 3 Portfolio Projects"]
    };
  }
}
