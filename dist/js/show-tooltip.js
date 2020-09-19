// const arrowIcon = document.getElementById('supplier')

// arrowIcon.addEventListener('click', e => {
//     const target = e.target,
//           list = Array.from(arrowIcon.querySelectorAll('.info')),
//           index = list.indexOf(target)
//     console.log(`hiciste clic en el item ${index + 1}`)
// })

const showTooltip = (imgButtonId, tooltipId) => {
    let imgButton = document.getElementById(imgButtonId),
        tooltip = document.getElementById(tooltipId)
    if(imgButton && tooltip) {
        imgButton.addEventListener('click', () => {
            imgButton.classList.toggle('info-down')
            tooltip.classList.toggle('toggle-tooltip')
        })
    }
}

showTooltip('supplierpotencia', 'potencia')
showTooltip('suppliercel', 'cel')
showTooltip('supplierdft', 'dft')
showTooltip('supplierserviciosconexos', 'serviciosconexos')
showTooltip('supplierdemandacontrolable', 'demandacontrolable')
showTooltip('supplierrgd', 'rgd')

showTooltip('supplierpower', 'power')
showTooltip('suppliercec', 'cec')
showTooltip('supplierftr', 'ftr')
showTooltip('supplierancillaryservices', 'ancillaryservices')
showTooltip('supplierdemandresponse', 'demandresponse')
showTooltip('supplierdgr', 'dgr')

showTooltip('generatorenergía', 'energíados')
showTooltip('generatorpotencia', 'potenciados')
showTooltip('generatorserviciosconexos', 'serviciosconexosdos')
showTooltip('generatordgr', 'dgrdos')
showTooltip('generatorrce', 'rgcedos')

showTooltip('generatorenergy', 'energydos')
showTooltip('generatorpower', 'powerdos')
showTooltip('generatorancillaryservices', 'ancillaryservicesdos')
showTooltip('generatorrgs', 'generatorsreprgddos')
showTooltip('generatorppr', 'pprdos')