import { redirect } from 'next/navigation'
import { SignupFormSchema } from '@/app/auth/sign-up/definitions/sign-up-definitions'

export async function SignUpFormState(state, formData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 2. Prepare data for insertion into database
  const { full_name, email, password } = validatedFields.data
  const userData = {
    full_name: full_name,
    email: email,
    password: password,
  };
  // e.g. Hash the user's password before storing it
  //const hashedPassword = await bcrypt.hash(password, 10)

  // 3. Insert the user call an Library API
  try {
    const response = await fetch('/api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(userData), // Pass user data here
    });

    const data = await response.json()

    if (!response.ok) {
      //console.log("Sign up api error: " +  data.message)
      return {
        message: data.message
      }
    }
  } catch (error) {
    console.error('Error signing up user:', error);
    return {
      message: 'Something went wrong!'
    }
  }

  //const user = data[0]

  //if (!user) {
  // return {
  //   message: 'An error occurred while creating your account.',
  // }
  //} 



  // TODO:
  // 4. Create user session
  // 5. Redirect user
  redirect('/payment')
}