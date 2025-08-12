document.addEventListener('DOMContentLoaded', function() {
    console.log('Pieritech Website carregado com sucesso!');
});

function copyEmail(event) {
    event.preventDefault();
    
    const email = 'luis@pieritech.com.br';
    
    navigator.clipboard.writeText(email).then(function() {
        showNotification('📋 Email copiado!');
        console.log('Email copiado para a área de transferência');
    }).catch(function(err) {
        console.error('Erro ao copiar email: ', err);
        showNotification('❌ Erro ao copiar email. Tente novamente.');
    });
}

function showNotification(message) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function openWhatsApp(event) {
    event.preventDefault();
    
    const phoneNumber = '5512997533555';
    const message = 'Olá! Vim através do site da Pieritech.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    showNotification('📱 Redirecionando para o WhatsApp...');
}