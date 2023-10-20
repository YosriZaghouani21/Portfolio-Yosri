// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // Initialize the Resend service
// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// // Define the admin email (your email)
// const adminEmail = "zaghouani.yosri@gmail.com";

// export async function POST(req, res) {
//   // Extract user's email, subject, and message from the request
//   const { email, subject, message } = await req.json();

//   try {
//     // Send the email to the admin and include the user's email in the content
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [adminEmail],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>User Email: {email}</p>
//           <p>Message:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     // Optionally, you can send a confirmation email to the user
//     const userResponse = await resend.emails.send({
//       from: fromEmail,
//       to: [email],
//       subject: "Your Message to Yosri Zaghouani",
//       react: (
//         <>
//           <h1>Your Message to Yosri Zaghouani</h1>
//           <p>Thank you for contacting me!</p>
//           <p>
//             Your message has been received, and we will get back to you shortly.
//           </p>
//         </>
//       ),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
