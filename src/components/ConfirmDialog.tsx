import React from 'react'
import { useTranslation } from 'react-i18next'

interface ConfirmDialogProps {
	isOpen: boolean
	onConfirm: () => void
	onCancel: () => void
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
	isOpen,
	onConfirm,
	onCancel
}) => {
	const { t } = useTranslation()
	if (!isOpen) {
		return null
	}

	return (
		<div
			aria-modal="true"
			role="dialog"
			aria-labelledby="confirm-title"
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
		>
			<section className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
				<header className="px-6 pt-5 pb-3 border-b border-grey-100">
					<h2
						id="confirm-title"
						className="text-xl font-medium text-grey-500"
					>
						{t('confirmTitle')}
					</h2>
				</header>
				<main className="px-6 py-4">
					<p className="text-sm text-grey-400">{t('confirmText')}</p>
				</main>
				<footer className="flex justify-end gap-3 px-6 pb-5 pt-3 border-t border-grey-100">
					<button
						type="button"
						className="px-5 py-2 rounded-xl border border-grey-200 text-sm text-grey-400 hover:bg-grey-100"
						onClick={onCancel}
					>
						{t('confirmNo')}
					</button>
					<button
						type="button"
						className="px-6 py-2 rounded-xl bg-brand-200 text-white text-sm font-semibold hover:bg-brand-100"
						onClick={onConfirm}
					>
						{t('confirmYes')}
					</button>
				</footer>
			</section>
		</div>
	)
}
