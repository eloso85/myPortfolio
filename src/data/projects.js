import ecomImage from '../images/e-com.png'
import socialApeImage from '../images/socialape.png'
import recipeImage from '../images/recipe.jpg'
import chatcordImage from '../images/chatcord.png'

export const projects = [
  {
    id: 'e-com-store',
    name: 'E-Com Store',
    description:
      'An online storefront with a shopping cart and Stripe test checkout.',
      tech: ['React', 'Commerce.js', 'Material-UI', 'Stripe'],
      image:ecomImage,
    },
  {
    id: 'socialape',
    name: 'SocialApe Tweet',
    description:
      'A social application with authentication, image uploads, and notifications.',
    tech: ['React', 'Firebase', 'Redux', 'Express', 'Material-UI'],
    image: socialApeImage
  },
  {
    id: 'wat2eat',
    name: 'Wat2Eat',
    description:
      'A recipe discovery application with drink searches and nearby grocery locations.',
    tech: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
    image: recipeImage,
  },
  {
    id: 'chatcord',
    name: 'Chatcord',
    description:
      'A real-time chat application with coding-themed chatrooms.',
    tech: ['Node.js', 'Express', 'Socket.io', 'JavaScript'],
    image: chatcordImage
  },
]