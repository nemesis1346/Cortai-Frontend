import type { ReactNode } from 'react'

type Props = {
	title?: string
	right?: ReactNode
	children?: ReactNode
	className?: string
}

function Card({ title, right, children, className }: Props) {
	return (
		<div className={`card p-[1.25rem] ${className ?? ''}`}>
			{(title || right) && <CardHeader left={title ? <h3 className="card-title min-w-0">{title}</h3> : undefined} right={right} />}
			{children ?? null}
		</div>
	)
}

type HeaderProps = {
	left?: ReactNode
	middle?: ReactNode
	right?: ReactNode
}

export function CardHeader({ left, middle, right }: HeaderProps) {
	const cols = middle != null ? 'grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]' : 'grid-cols-[minmax(0,1fr)_auto]'
	return (
		<div className={`mb-3 grid ${cols} justify-between items-center gap-x-[0.5rem] gap-y-1`}>
			<div className="card-header-left min-w-0">{left ?? <span />}</div>
			{middle != null ? <div className="shrink-0 justify-self-center">{middle}</div> : null}
			<div className="flex min-w-0 justify-end justify-self-end">{right}</div>
		</div>
	)
}

type BodyProps = { children?: ReactNode; className?: string }
export function CardBody({ children, className }: BodyProps) {
	return <div className={className}>{children}</div>
}

export default Card
