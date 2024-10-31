import React from "react";

function AlertMessage({message})
{
    // Verifica se a mensagem contém tanto success quanto error
    const hasSuccess = message.success ? true : false;
    const hasError = message.error ? true : false;

    // Não renderiza se não houver mensagens
    if(!hasSuccess && !hasError) return null;

    // Definir as cores e textos de acordo com o tipo da mensagem
    const alertStyles = hasSuccess ? {
        bg: 'bg-green-50 dark:bg-gray-800',
        text: 'text-green-800 dark:text-green-400',
        content: message.success,
    } : {
        bg: 'bg-red-50 dark:bg-gray-800',
        text: 'text-red-800 dark:text-green-400',
        content: message.error,
    };

    return(
        <div className={`p-3 m-3 text-sm rounded-lg ${alertStyles.text} ${alertStyles.bg}`}>
            {alertStyles.content}
        </div>
    )
}

export default AlertMessage;