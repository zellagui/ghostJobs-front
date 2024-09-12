import type { VulkConfig } from '/@src/types'

/**
 * Set your default Navbar by importing a vue component
 * Note: If you rename the import, make sure to update the type definition bellow
 *
 * @example import Navbar from '/@src/components/blocks/navbar-blocks/NavbarA.vue'
 */
import Navbar from '/@src/components/navigation/navbar/Navbar.vue'

// Additonal megamenu components required by the Navbar
import CompanyMegamenu from '/@src/components/navigation/navbar/megamenu/CompanyMegamenu.vue'
import ProductMegamenu from '/@src/components/navigation/navbar/megamenu/ProductMegamenu.vue'
import ResourcesMegamenu from '/@src/components/navigation/navbar/megamenu/ResourcesMegamenu.vue'

/**
 * Set your default Footer by importing a vue component
 * Note: If you rename the import, make sure to update the type definition bellow
 *
 * @example import Footer from '/@src/components/blocks/footer-blocks/FooterA.vue'
 */
import Footer from '/@src/components/layout/footer/Footer.vue'

// Auto detect the type of the imported components
type NavbarType = typeof Navbar
type FooterType = typeof Footer
type AppConfig = VulkConfig<NavbarType, FooterType>

/**
 * This is the main configuration file for the app
 */
export default {
  name: 'Ghosts job',
  title: 'Ghosts Job | Home',
  description:
    'Vulk is a premium toolkit that lets you build powerful, SSR-Ready memorable websites.',
  url: import.meta.env.VITE_APP_URL || 'http://localhost:3000/',
  image:
    'https://media.cssninja.io/embed/marketplace/product/wide.png?headline=Multipurpose%20Vue%203%20SSR%20SaaS%20Landing%20Pages%20UI%20Kit&url=https%3A%2F%2Fcdn.schema.io%2Fcssninja%2F626717a31bfb2b0019dc414b%2Fcaeea9b43d968b49533ed6f37ed7ad4e&previewUrl=https%3A%2F%2Fcdn.schema.io%2Fcssninja%2F625e9270282b940012bfae2e%2F12a2a61e3baa2df0b5c3cc408065959d',
  theme: {
    // Auto detect system color scheme
    default: 'system',
    // Display the theme switcher
    toggle: true,
    // Disable transitions to avoid transition flickering when switching theme
    disableTransitions: true,
  },
  logo: {
    src: '/assets/logo/gg.svg',
    // srcDark: '/assets/logo/logo-dark.svg',
    width: 50,
    height: 50,
  },
  layout: {
    transition: 'fade-fast',
    backToTop: {
      // Display the back to top button
      enabled: true,
    },
    navbar: {
      enabled: true,
      component: Navbar,
      props: {
        // define default props for Navbar here, you can override them using page meta
        cta: {
          to: '/',
          target: '_blank',
          label: 'Subscribe',
        },
        items: [
          {
            label: 'Home',
            to: '/',
          },
         
          {
            label: 'Survey',
            to: 'survey',
          },
          {
            label: 'Blog',
            to: 'blog',
          },
          // {
          //   label: 'Contact Us',
          //   to: '/page/faq',
          // },
        ],
      },
    },
    footer: {
      enabled: false,
      component: Footer,
      props: {
        // define default props for Footer here, you can override them using page meta
        color: 'dark',
        content: {
          cta: {
            title: 'Maximize your marketplace potential',
            subtitle: '30-day free trial',
            benefits: [
              {
                label: 'AI-powered tech',
              },
              {
                label: 'Hours of time saved',
              },
            ],
            links: [
              {
                label: 'Get Started',
                to: '/',
              },
              {
                label: "Let's Talk",
                to: '/',
              },
            ],
          },
          newsletter: {
            action: '#',
            method: 'POST',
          },
          columns: [
            {
              title: 'Product',
              links: [
                {
                  label: 'Core features',
                  to: '/',
                },
                {
                  label: 'Extensions',
                  to: '/',
                },
                {
                  label: 'Marketing',
                  to: '/',
                },
                {
                  label: 'Sales Management',
                  to: '/',
                },
                {
                  label: 'Software',
                  to: '/',
                },
              ],
            },
            {
              title: 'Company',
              links: [
                {
                  label: 'Register',
                  to: '/',
                },
                {
                  label: '14-Day Trial',
                  to: '/',
                },
                {
                  label: 'About Us',
                  to: '/',
                },
                {
                  label: 'Careers',
                  to: '/',
                },
                {
                  label: 'Latest News',
                  to: '/',
                },
              ],
            },
            {
              title: 'API',
              links: [
                {
                  label: 'Getting Started',
                  to: '/',
                },
                {
                  label: 'API Reference',
                  to: '/',
                },
                {
                  label: 'Developer Guide',
                  to: '/',
                },
                {
                  label: 'GitHub',
                  to: '/',
                },
              ],
            },
            {
              title: 'Assistance',
              links: [
                {
                  label: 'Help Center',
                  to: '/',
                },
                {
                  label: 'Support Requests',
                  to: '/',
                },
                {
                  label: 'FAQs',
                  to: '/',
                },
                {
                  label: 'Licensing',
                  to: '/',
                },
              ],
            },
          ],
          socials: [
            {
              icon: 'fa-brands:facebook-f',
              link: '/',
              name: 'Facebook',
            },
            {
              icon: 'fa-brands:twitter',
              link: '/',
              name: 'Twitter',
            },
            {
              icon: 'fa-brands:linkedin-in',
              link: '/',
              name: 'Linkedin',
            },
            {
              icon: 'fa-brands:youtube',
              link: '/',
              name: 'Youtube',
            },
            {
              icon: 'fa-brands:github',
              link: '/',
              name: 'GitHub',
            },
          ],
          links: [
            {
              label: 'Contact Us',
              to: '/',
            },
            {
              label: 'Privacy',
              to: '/',
            },
            {
              label: 'Terms Of Service',
              to: '/',
            },
          ],
          copyright: '© 2022-2023 Css Ninja. All rights reserved.',
        },
      },
    },
  },
} as AppConfig
