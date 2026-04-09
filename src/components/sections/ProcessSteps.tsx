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
      'Call, email, or fill in the contact form. Tell us what you have in mind and we\'ll be in touch within one business day.',
  },
  {
    number: '02',
    title: 'Free Consultation',
    description:
      'We walk through your space, understand your vision, and give you a clear, honest quote.',
  },
  {
    number: '03',
    title: 'Skilled Execution',
    description:
      'We work cleanly, efficiently, and with real respect for your home. You\'re kept informed at every stage.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description:
      'We go through everything together. We\'re not done until you\'re completely happy with the result.',
  },
]

export default function ProcessSteps({
  eyebrow = 'How It Works',
  title = 'A Process That Respects Your Home & Time',
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
                  dark ? 'text-gold/50' : 'text-gold/60'
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
