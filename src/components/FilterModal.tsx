import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BedType, useFilterStore } from '../store/filterStore'

interface FilterModalProps {
	isOpen: boolean
	onClose: () => void
	onApplyClick: (pending: {
		guests: number
		rooms: number
		bedType: BedType
	}) => void
}

export const FilterModal: React.FC<FilterModalProps> = ({
	isOpen,
	onClose,
	onApplyClick
}) => {
	const { t } = useTranslation()
	const global = useFilterStore()
	const [guests, setGuests] = useState(global.guests)
	const [rooms, setRooms] = useState(global.rooms)
	const [bedType, setBedType] = useState<BedType>(global.bedType)

	// Предзаполнение при каждом открытии
	useEffect(() => {
		if (isOpen) {
			setGuests(global.guests)
			setRooms(global.rooms)
			setBedType(global.bedType)
		}
	}, [isOpen, global.guests, global.rooms, global.bedType])

	if (!isOpen) {
		return null
	}
	return (
		<div
			aria-modal="true"
			role="dialog"
			aria-labelledby="filter-modal-title"
			className="fixed inset-0 z-40 flex items-center justify-center bg-black/30"
		>
			<section className="bg-white rounded-xl shadow-xl w-full max-w-2xl mx-4">
				<header className="flex items-center justify-between px-8 pt-6 pb-4 border-b border-grey-100">
					<h2
						id="filter-modal-title"
						className="text-2xl font-medium text-grey-500"
					>
						{t('filterTitle')}
					</h2>
					<button
						onClick={onClose}
						aria-label={t('Close filter')}
						className="p-2 rounded-full hover:bg-grey-100"
					>
						{t(' ✕')}
					</button>
				</header>

				<main className="px-8 py-6">
					<form
						className="space-y-6"
						onSubmit={e => {
							e.preventDefault()
							onApplyClick({ guests, rooms, bedType })
						}}
					>
						<fieldset className="flex items-center justify-between gap-6">
							<legend className="text-grey-400 text-sm mb-2">
								{t('guests')}
							</legend>
							<div className="flex items-center gap-4">
								<button
									type="button"
									className="w-8 h-8 rounded-xl border border-grey-200 flex items-center justify-center hover:bg-grey-100"
									onClick={() => setGuests(quest => Math.max(1, quest - 1))}
								>
									–
								</button>
								<span className="w-8 text-center text-lg font-medium text-grey-500">
									{guests}
								</span>
								<button
									type="button"
									className="w-8 h-8 rounded-xl bg-white border border-grey-200 flex items-center justify-center hover:bg-grey-100"
									onClick={() => setGuests(quest => quest + 1)}
								>
									+
								</button>
							</div>
						</fieldset>

						<fieldset className="flex items-center justify-between gap-6">
							<legend className="text-grey-400 text-sm mb-2">
								{t('rooms')}
							</legend>
							<div className="flex items-center gap-4">
								<button
									type="button"
									className="w-8 h-8 rounded-xl border border-grey-200 flex items-center justify-center hover:bg-grey-100"
									onClick={() => setRooms(rooms => Math.max(1, rooms - 1))}
								>
									–
								</button>
								<span className="w-8 text-center text-lg font-medium text-grey-500">
									{rooms}
								</span>
								<button
									type="button"
									className="w-8 h-8 rounded-xl bg-white border border-grey-200 flex items-center justify-center hover:bg-grey-100"
									onClick={() => setRooms(rooms => rooms + 1)}
								>
									+
								</button>
							</div>
						</fieldset>

						<fieldset className="space-y-3">
							<legend className="text-grey-400 text-sm">{t('bedType')}</legend>
							<div className="flex flex-wrap gap-3">
								{(
									[
										['any', t('any')],
										['double', t('doubleBed')],
										['single', t('singleBed')]
									] as const
								).map(([value, label]) => {
									const active = bedType === value
									return (
										<button
											key={value}
											type="button"
											onClick={() => setBedType(value)}
											className={[
												'flex items-center gap-2 px-4 py-3 rounded-xl border text-sm',
												active
													? 'bg-grey-500 text-white border-grey-500'
													: 'bg-white text-grey-500 border-grey-200 hover:bg-grey-100'
											].join(' ')}
										>
											<span
												className={[
													'inline-flex h-5 w-5 items-center justify-center rounded-full border',
													active
														? 'bg-primary-100 border-primary-100'
														: 'border-grey-300'
												].join(' ')}
												aria-hidden="true"
											/>
											<span>{label}</span>
										</button>
									)
								})}
							</div>
						</fieldset>
					</form>
				</main>

				<footer className="flex justify-between items-center px-8 pb-6 pt-4 border-t border-grey-100">
					<button
						type="button"
						className="px-6 py-3 rounded-xl border border-grey-200 text-grey-400 text-sm hover:bg-grey-100"
						onClick={onClose}
					>
						{t('cancel')}
					</button>
					<button
						type="submit"
						form="filter-form"
						className="px-8 py-3 rounded-xl bg-brand-200 text-white text-sm font-semibold hover:bg-brand-100"
						onClick={() => onApplyClick({ guests, rooms, bedType })}
					>
						{t('apply')}
					</button>
				</footer>
			</section>
		</div>
	)
}
