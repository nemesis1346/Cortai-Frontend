import CircuitCard from './CircuitCard'
import type { SdWanCircuit } from './types'

type CircuitsSectionProps = {
	circuits: SdWanCircuit[]
}

export default function CircuitsSection({ circuits }: CircuitsSectionProps) {
	return (
		<section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
			{circuits.map((c) => (
				<CircuitCard key={c.id} circuit={c} />
			))}
		</section>
	)
}
