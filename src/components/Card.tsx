import type { ReactNode } from 'react'

type Props = {
	title?: string
	right?: ReactNode
	children?: ReactNode
	className?: string
}

function Card({ title, right, children, className }: Props) {
	return (
		<div className={`card p-4 ${className ?? ''}`}>
			{(title || right) && <CardHeader left={title ? <h3 className="card-title">{title}</h3> : undefined} right={right} />}
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
	return (
		<div className="mb-3 grid grid-cols-[1fr_auto_1fr] items-center">
			<div>{left ?? <span />}</div>
			<div className="justify-self-center">{middle}</div>
			<div className="justify-self-end">{right}</div>
		</div>
	)
}

type BodyProps = { children?: ReactNode; className?: string }
export function CardBody({ children, className }: BodyProps) {
	return <div className={className}>{children}</div>
}

export default Card
