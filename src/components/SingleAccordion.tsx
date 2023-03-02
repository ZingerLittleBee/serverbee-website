import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

function SingleAccordion(props) {
	console.log('props.children', props.children)
	return (
		<Accordion type='single' collapsible className='w-full'>
			<AccordionItem value={props.title}>
				<AccordionTrigger className='pb-0'>
					{props.title}
				</AccordionTrigger>
				<AccordionContent className='p-2'>
					{props.children}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}

export default SingleAccordion
