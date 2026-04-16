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
    title: 'Tell Us What You\'re Thinking',
    description:
      'Call, email, or fill out the form — no commitment, no pressure. We respond within a few hours, not days. Even a rough idea is enough to start.',
  },
  {
    number: '02',
    title: 'We Come to You — Free',
    description:
      'Erik walks through your space in person, listens to your vision, and gives you a clear written quote. No vague estimates, no hidden surprises later. Usually within the same week.',
  },
  {
    number: '03',
    title: 'Clean Work. Regular Updates.',
    description:
      'We treat your home like it\'s ours — protected floors, contained dust, tools put away each day. You hear from us regularly so there are no anxious "what\'s happening?" moments.',
  },
  {
    number: '04',
    title: 'Done Means Done',
    description:
      'We walk through every detail together before we call it finished. Punch list items get handled — not forgotten. You shouldn\'t have to chase a contractor after they\'ve been paid.',
  },
]

export default function ProcessSteps({
  eyebrow = 'How It Works',
  title = 'No Surprises. No Ghosting. No Mess Left Behind.',
  steps = defaultSteps,
  dark = false,
}: ProcessStepsProps) {
  return (
    <section className={`section-padding ${dark ? 'bg-dark-base' : 'bg-charcoal'}`}>
      <div className="container-editorial">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel className="mb-4" light={dark}>{eyebrow}</SectionLabel>
            <h2 className={`font-serif font-light text-h2 md:text-h1 ${dark ? 'text-cream' : 'text-cream'}`}>
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
                <h3 className={`font-serif font-medium text-h4 mb-3 ${dark ? 'text-cream' : 'text-cream'}`}>
                  {step.title}
                </h3>
                <p className={`font-sans text-[0.875rem] leading-relaxed ${dark ? 'text-cream/55' : 'text-cream/60'}`}>
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
