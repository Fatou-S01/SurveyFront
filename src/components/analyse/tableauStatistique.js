import {React, useState } from 'react';
import { formatDataForStatistique } from './data';
import { moyenne,median,ecart_type } from './functions';

function TableauStatistique(props){
    return(<div className='tableResultat'>
		<table class="table table-striped 
									 table-sm">
			<thead>
				<tr>
					<th> Statistique</th>
                    <th></th><th></th><th></th><th></th>
				</tr>
			</thead>
			<tbody>
            <tr >
					<td className='text-center'><p>Maximum</p> <p>{formatDataForStatistique(props.datasets).maximum}</p></td>
					<td className='text-center'><p>Minimum</p> <p>{ formatDataForStatistique(props.datasets).minimum}</p></td>
                    <td className='text-center'><p>Mediane</p> <p>{parseFloat(ecart_type(formatDataForStatistique(props.datasets).datasets)).toFixed(2)}</p> </td>
                    <td className='text-center'><p>Moyenne</p> <p>{parseFloat(moyenne(formatDataForStatistique(props.datasets).datasets)).toFixed(2)}</p> </td>
                    <td className='text-center'> <p>Ecart_type</p> <p>{parseFloat(ecart_type(formatDataForStatistique(props.datasets).datasets)).toFixed(2)}</p></td>
				</tr>
				
			</tbody>
   	</table>
	</div>
    )
}

export {TableauStatistique}