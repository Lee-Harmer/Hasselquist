import FadeIn from '@/components/motion/FadeIn'
import StaggerChildren, { StaggerItem } from '@/components/motion/StaggerChildren'
import SectionLabel from '@/components/ui/SectionLabel'

interface Step {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  eyebrow?: string
  title?: string
  steps?: Step[]
  dark?: boolean
}

const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Reach Out',
    description:
      'Call, email, or fill out the contact form. Tell us about your project — we\'ll respond within one business day.',
  },
  {
    number: '02',
    title: 'Free Consultation',
    description:
      'We come to you for a walkthrough, listen carefully, and provide a detailed, transparent quote — no surprises.',
  },
  {
    number: '03',
    title: 'Skilled Execution',
    description:
      'Our team works efficiently and cleanly. You\'re kept informed throughout, and we respect your home and schedule.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'We walk through the finished work together. We\'re not done until you\'re completely satisfied — that\'s the standard.',
  },
]

export default function ProcessSteps({
  eyebrow = 'How It Works',
  title = 'A Process Built on Trust',
  steps = defaultSteps,
  dark = false,
}: ProcessStepsProps) {
  return (
    <section className={`section-padding ${dark ? 'bg-charcoal' : 'bg-cream'}`}>
      <div className="container-editorial">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4" light={dark}>{eyebrow}</SectionLabel>
            <h2 className={`font-serif font-light text-h2 md:text-h1 ${dark ? 'text-cream' : 'text-stone-900'}`}>
              {title}
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className={`font-serif font-light text-[4rem] leading-none block mb-3 ${
                  dark ? 'text-gold/20' : 'text-gold/25'
                }`}>
                  {step.number}
                </span>
                <div className={`w-8 h-px mb-4 ${dark ? 'bg-gold/40' : 'bg-gold/50'}`} />
                <h3 className={`font-serif font-medium text-h4 mb-3 ${dark ? 'text-cream' : 'text-stone-900'}`}>
                  {step.title}
                </h3>
                <p className={`font-sans text-[0.875rem] leading-relaxed ${dark ? 'text-cream/55' : 'text-stone-600'}`}>
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
