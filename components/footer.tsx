import Link from 'next/link'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Partners', href: '/partners' },
  { name: 'Resources', href: '/resources' },
  { name: 'Donations', href: '/donate' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted mt-auto">
      <div className="container py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-primary text-xl">PREGMPOX</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Advancing research in pregnancy and mpox through innovative studies
              and global collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@pregmpox.org</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Global Research Center</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PREGMPOX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}