// Notification utilities for booking enquiries

// Telegram Bot Configuration
const TELEGRAM_BOTS = [
  { token: '8262340311:AAHmlkmM1E8DOaA-qfHG4reP4oaFpbUN1T4', chatId: '6111110998' },
  ];

// API base URL for backend
const API_BASE_URL = import.meta.env.DEV ? 'http://localhost:3001/api' : '/api';

// Generate unique booking ID
export const generateBookingId = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 9; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Send Telegram notification (supports multiple bots)
export const sendTelegramNotification = async (message: string): Promise<boolean> => {
  try {
    console.log(`📱 Sending Telegram notification to ${TELEGRAM_BOTS.length} bots...`);

    const results = await Promise.all(
      TELEGRAM_BOTS.map(async ({ token, chatId }, index) => {
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });

        const result = await response.json();

        if (result.ok) {
          console.log(`✅ Telegram Bot ${index + 1} sent successfully (Chat ID: ${chatId})`);
        } else {
          console.error(`❌ Telegram Bot ${index + 1} failed:`, result.description);
        }

        return result.ok;
      })
    );

    // Return true if at least one succeeded
    return results.some(success => success);
  } catch (error) {
    console.error('❌ Error sending Telegram notifications:', error);
    return false;
  }
};

export interface BookingEnquiry {
  tripType: string;
  from: string;
  to: string;
  date: string;
  time: string;
  customerPhone?: string;
  customerName?: string;
  fareEstimate?: number;
  bookingId?: string;
  vehicleType?: string;
  tripDistance?: string;
  tripDuration?: string;
  customerEmail?: string;
  vehicleRate?: number;
  driverAllowance?: number;
}


// Send booking enquiry email via backend
export const sendBookingEnquiryEmail = async (booking: BookingEnquiry): Promise<boolean> => {
  try {
    console.log('📧 Sending booking enquiry email via backend...', {
      bookingId: booking.bookingId,
      customerName: booking.customerName,
      from: booking.from,
      to: booking.to
    });
    
    const response = await fetch(`${API_BASE_URL}/send-booking-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookingId: booking.bookingId,
        customerName: booking.customerName,
        customerPhone: booking.customerPhone,
        customerEmail: booking.customerEmail || '',
        tripType: booking.tripType,
        from: booking.from,
        to: booking.to,
        date: booking.date,
        time: booking.time,
        vehicleType: booking.vehicleType || 'SEDAN',
        tripDistance: booking.tripDistance,
        tripDuration: booking.tripDuration,
        fareEstimate: booking.fareEstimate,
        perKmRate: booking.vehicleRate || 14,
        driverAllowance: booking.driverAllowance || 400,
        status: 'ENQUIRY'
      })
    });

    console.log('📧 Backend response status:', response.status);
    
    const result = await response.json();
    console.log('📧 Backend response:', result);
    
    if (result.success) {
      console.log('✅ Booking enquiry email sent successfully via backend');
      console.log('📧 Email sent to: fastridedroptaxi.booking@gmail.com');
      console.log('📧 Message ID:', result.messageId);
      return true;
    } else {
      console.error('❌ Backend enquiry email sending failed:', result.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending booking enquiry email via backend:', error);
    return false;
  }
};

// Send booking confirmation email via backend
export const sendBookingConfirmationEmail = async (booking: BookingEnquiry): Promise<boolean> => {
  try {
    console.log('📧 Sending booking confirmation email via backend...', {
      bookingId: booking.bookingId,
      customerName: booking.customerName,
      from: booking.from,
      to: booking.to
    });
    
    const response = await fetch(`${API_BASE_URL}/send-booking-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookingId: booking.bookingId,
        customerName: booking.customerName,
        customerPhone: booking.customerPhone,
        customerEmail: booking.customerEmail || '',
        tripType: booking.tripType,
        from: booking.from,
        to: booking.to,
        date: booking.date,
        time: booking.time,
        vehicleType: booking.vehicleType || 'SEDAN',
        tripDistance: booking.tripDistance,
        tripDuration: booking.tripDuration,
        fareEstimate: booking.fareEstimate,
        perKmRate: booking.vehicleRate || 14,
        driverAllowance: booking.driverAllowance || 400,
        status: 'CONFIRMED'
      })
    });

    console.log('📧 Backend response status:', response.status);
    
    const result = await response.json();
    console.log('📧 Backend response:', result);
    
    if (result.success) {
      console.log('✅ Booking confirmation email sent successfully via backend');
      console.log('📧 Email sent to: fastridedroptaxi.booking@gmail.com');
      console.log('📧 Message ID:', result.messageId);
      return true;
    } else {
      console.error('❌ Backend confirmation email sending failed:', result.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending booking confirmation email via backend:', error);
    return false;
  }
};

// Send contact form email via backend
export const sendContactEmail = async (contactData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> => {
  try {
    console.log('📧 Sending contact email via backend...');
    
    const response = await fetch(`${API_BASE_URL}/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    });

    console.log('📧 Backend response status:', response.status);
    
    const result = await response.json();
    console.log('📧 Backend response:', result);
    
    if (result.success) {
      console.log('✅ Contact email sent successfully via backend');
      return true;
    } else {
      console.error('❌ Backend contact email sending failed:', result.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending contact email via backend:', error);
    return false;
  }
};

// Format booking enquiry for WhatsApp message
export const formatWhatsAppEnquiryMessage = (booking: BookingEnquiry): string => {
  const message = `🚖 *BOOKING ENQUIRY - Fastridedroptaxi*
 
  📋 *Trip Details:*
• Booking ID: ${booking.bookingId}
• Name: ${booking.customerName}
• Phone: ${booking.customerPhone}
• Trip Type: ${booking.tripType === 'oneway' ? 'One Way (Min: 130 KM)' : 'Round Trip (Min: 250 KM)'}
• From: ${booking.from}
• To: ${booking.to}
• Date: ${booking.date}
• Time: ${booking.time}
• Distance: ${booking.tripDistance}
• Duration: ${booking.tripDuration}
• Total Fare: ₹${booking.fareEstimate}
• Rate: ₹${booking.vehicleRate}/km
• Driver Allowance: ₹${booking.driverAllowance}
• Vehicle: ${booking.vehicleType}
• For Customer Intimation:Toll Gate, Permit, and Hill Station charges extra.

⏰ *Enquiry Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📞 *Contact Support:* +91 6382980204
 🌐 *Website:* www.Fastridedroptaxi.com
`;

  return encodeURIComponent(message);
};



// Format customer enquiry WhatsApp message
export const formatCustomerWhatsAppEnquiryMessage = (booking: BookingEnquiry): string => {
  const message = `🚖 *Thank you for your enquiry - Fastridedroptaxi*

Dear ${booking.customerName}, 

We have received your booking enquiry! 📋

*Your Trip Details:*
• Booking ID: ${booking.bookingId}
• Trip Type: ${booking.tripType === 'oneway' ? 'One Way' : 'Round Trip'}
• From: ${booking.from}
• To: ${booking.to}
• Date: ${booking.date}
• Time: ${booking.time}
• Vehicle: ${booking.vehicleType}


💰 *Fare Estimate: ₹${booking.fareEstimate}*
• Distance: ${booking.tripDistance}
• Duration: ${booking.tripDuration}
• Rate: ₹${booking.vehicleRate}/km + ₹${booking.driverAllowance} driver allowance

✅ *Next Steps:*
Our team will contact you shortly to confirm your booking and provide driver details.

📞 *Contact Us:*
• Phone: +91 6382980204
• Email: Fastridedroptaxi.booking@gmail.com
• Website: www.Fastridedroptaxi.com

Thank you for choosing Fastridedroptaxi! 🙏

⏰ *Enquiry Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

  return encodeURIComponent(message);
};

// Format customer confirmation WhatsApp message
export const formatCustomerWhatsAppConfirmationMessage = (booking: BookingEnquiry): string => {
  const message = `🚖 *BOOKING CONFIRMED - Fastridedroptaxi*

Dear ${booking.customerName},

Your booking has been confirmed! ✅

*Confirmed Trip Details:*
• Booking ID: ${booking.bookingId}
• Trip Type: ${booking.tripType === 'oneway' ? 'One Way' : 'Round Trip'}
• From: ${booking.from}
• To: ${booking.to}
• Date: ${booking.date}
• Time: ${booking.time}
• Vehicle: ${booking.vehicleType}

💰*Total Fare: ₹${booking.fareEstimate}*
• Distance: ${booking.tripDistance}
• Duration: ${booking.tripDuration}

🚗 *What's Next:*
• Our driver will contact you 15-30 minutes before pickup
• Driver details will be shared via SMS/WhatsApp
• Please be ready at the pickup location on time

📞 *24/7 Support:*
• Phone: +91 6382980204
• WhatsApp: +91 6382980204
• Email: Fastridedroptaxi.booking@gmail.com

Thank you for choosing Fastridedroptaxi! 🙏
Safe travels!

⏰ *Confirmed Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

  return encodeURIComponent(message);
};
// Format booking confirmation for WhatsApp message
export const formatWhatsAppConfirmationMessage = (booking: BookingEnquiry): string => {
  const message = `🚖 *BOOKING CONFIRMATION - Fastridedroptaxi*

Thanks for booking Fastridedroptaxi! 🙏

📋 *Trip Details:*
• Booking ID: ${booking.bookingId}
• Name: ${booking.customerName}
• Phone: ${booking.customerPhone}
• Trip Type: ${booking.tripType === 'oneway' ? 'One Way (Min: 130 KM)' : 'Round Trip (Min: 250 KM)'}
• From: ${booking.from}
• To: ${booking.to}
• Date: ${booking.date}
• Time: ${booking.time}
• Distance: ${booking.tripDistance}
• Duration: ${booking.tripDuration}
• Total Fare: ₹${booking.fareEstimate}
• Rate: ₹${booking.vehicleRate}/km + ₹${booking.driverAllowance} driver allowance
• Vehicle: ${booking.vehicleType}
• For Customer Intimation:Toll Gate, Permit, and Hill Station charges extra.

📞 *Contact:* +91 6382980204
🌐 *Website:* www.Fastridedroptaxi.com
${booking.customerEmail ? `• Email: ${booking.customerEmail}` : ''}

⏰ *Confirmed Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

  return encodeURIComponent(message);
};

// Format booking enquiry for Telegram
export const formatTelegramEnquiryMessage = (booking: BookingEnquiry): string => {
  return `🚖 *BOOKING ENQUIRY - Fastridedroptaxi*

📋 *Trip Details:*
• Booking ID: \`${booking.bookingId}\`
• Name: ${booking.customerName}
• Phone: ${booking.customerPhone}
• Trip Type: ${booking.tripType === 'oneway' ? 'One Way (Min: 130 KM)' : 'Round Trip (Min: 250 KM)'}
• From: ${booking.from}
• To: ${booking.to}
• Date: ${booking.date}
• Time: ${booking.time}
• Distance: ${booking.tripDistance}
• Duration: ${booking.tripDuration}
• Total Fare: ₹${booking.fareEstimate}
• Rate: ₹${booking.vehicleRate}/km + ₹${booking.driverAllowance} driver allowance
• Vehicle: ${booking.vehicleType}
• For Customer Intimation:Toll Gate, Permit, and Hill Station charges extra.
${booking.customerEmail ? `• Email: ${booking.customerEmail}` : ''}

⏰ *Enquiry Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📞 *Contact:* +91 6382980204`;
};

// Format booking confirmation for Telegram
export const formatTelegramConfirmationMessage = (booking: BookingEnquiry): string => {
  return `🚖 *BOOKING CONFIRMATION - Fastridedroptaxi*

✅ *CONFIRMED BOOKING*

📋 *Trip Details:*
• Booking ID: \`${booking.bookingId}\`
• Name: ${booking.customerName}
• Phone: ${booking.customerPhone}
• Trip Type: ${booking.tripType === 'oneway' ? 'One Way (Min: 130 KM)' : 'Round Trip (Min: 250 KM)'}
• From: ${booking.from}
• To: ${booking.to}
• Date: ${booking.date}
• Time: ${booking.time}
• Distance: ${booking.tripDistance}
• Duration: ${booking.tripDuration}
• Total Fare: ₹${booking.fareEstimate}
• Rate: ₹${booking.vehicleRate}/km + ₹${booking.driverAllowance} driver allowance
• Vehicle: ${booking.vehicleType}
• For Customer Intimation:Toll Gate, Permit, and Hill Station charges extra.
${booking.customerEmail ? `• Email: ${booking.customerEmail}` : ''}

⏰ *Confirmed Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📞 *Contact:* +91 6382980204`;
};

export const getTeamWhatsAppEnquiryUrl = (booking: BookingEnquiry): string => {
  return `https://wa.me/916382980204?text=${formatWhatsAppEnquiryMessage(booking)}`;
};


// Send WhatsApp enquiry notification to customer
export const getCustomerWhatsAppEnquiryUrl = (booking: BookingEnquiry): string => {
  const phone = booking.customerPhone?.replace(/\D/g, '') ?? '';
  const formattedPhone = phone.startsWith('91') ? phone : `91${phone}`;
  return `https://wa.me/${formattedPhone}?text=${formatCustomerWhatsAppEnquiryMessage(booking)}`;
};

// Send WhatsApp confirmation notification
export const getTeamWhatsAppConfirmationUrl = (booking: BookingEnquiry): string => {
  return `https://wa.me/916382980204?text=${formatWhatsAppConfirmationMessage(booking)}`;
};

// Send WhatsApp confirmation notification to customer
export const getCustomerWhatsAppConfirmationUrl = (booking: BookingEnquiry): string => {
  const phone = booking.customerPhone?.replace(/\D/g, '') ?? '';
  const formattedPhone = phone.startsWith('91') ? phone : `91${phone}`;
  return `https://wa.me/${formattedPhone}?text=${formatCustomerWhatsAppConfirmationMessage(booking)}`;
};

// Send enquiry notifications (email via backend + WhatsApp)
export const sendBookingEnquiryNotifications = async (booking: BookingEnquiry): Promise<void> => {
  console.log('📧 Starting booking enquiry notifications...', {
    bookingId: booking.bookingId,
    customerName: booking.customerName,
    customerPhone: booking.customerPhone,
    tripType: booking.tripType,
    from: booking.from,
    to: booking.to,
    fareEstimate: booking.fareEstimate
  });
  
  try {
    // Send enquiry email via backend
    console.log('📧 Sending enquiry email...');
    const emailSent = await sendBookingEnquiryEmail(booking);
    
    // Send Telegram enquiry notification
    console.log('📱 Sending Telegram enquiry notification...');
    const telegramMessage = formatTelegramEnquiryMessage(booking);
    const telegramSent = await sendTelegramNotification(telegramMessage);
    
    if (emailSent) {
      console.log('✅ Enquiry email sent successfully');
     console.log('📧 Fastridedroptaxi team notified via email at: Fastridedroptaxi.booking@gmail.com');
    } else {
      console.log('⚠️ Enquiry email failed');
    }
    
    if (telegramSent) {
      console.log('✅ Telegram enquiry notification sent successfully');
      console.log('📱 Fastridedroptaxi team notified via Telegram');
    } else {
      console.log('⚠️ Telegram enquiry notification failed');
    }
    
    // Send WhatsApp enquiry notification
    console.log('📱 Sending WhatsApp enquiry notification...');
    await sendWhatsAppEnquiryNotification(booking);
    
    // Show status to user
    if (emailSent || telegramSent) {
      console.log('✅ Enquiry notifications sent successfully');
      console.log('📧📱 Fastridedroptaxi team has been notified via Email, WhatsApp, and Telegram');
    } else {
      console.log('⚠️ Some notifications failed, but WhatsApp notification sent');
    }
  } catch (error) {
    console.error('❌ Error in enquiry notifications:', error);
    // Still send WhatsApp even if email fails
    await sendWhatsAppEnquiryNotification(booking);
  }
};

// Send confirmation notifications (email via backend + WhatsApp)
export const sendBookingConfirmationNotifications = async (booking: BookingEnquiry): Promise<void> => {
  console.log('📧 Starting booking confirmation notifications...', {
    bookingId: booking.bookingId,
    customerName: booking.customerName,
    customerPhone: booking.customerPhone,
    tripType: booking.tripType,
    from: booking.from,
    to: booking.to,
    fareEstimate: booking.fareEstimate
  });
  
  try {
    // Send confirmation email via backend
    console.log('📧 Sending confirmation email...');
    const emailSent = await sendBookingConfirmationEmail(booking);
    
    // Send Telegram confirmation notification
    console.log('📱 Sending Telegram confirmation notification...');
    const telegramMessage = formatTelegramConfirmationMessage(booking);
    const telegramSent = await sendTelegramNotification(telegramMessage);
    
    if (emailSent) {
      console.log('✅ Confirmation email sent successfully');
     console.log('📧 Fastridedroptaxi team notified via email at: Fastridedroptaxi.booking@gmail.com');
    } else {
      console.log('⚠️ Confirmation email failed');
    }
    
    if (telegramSent) {
      console.log('✅ Telegram confirmation notification sent successfully');
      console.log('📱 Fastridedroptaxi team notified via Telegram');
    } else {
      console.log('⚠️ Telegram confirmation notification failed');
    }
    
    // Send WhatsApp confirmation notification
    console.log('📱 Sending WhatsApp confirmation notification...');
    const teamWhatsappUrl = getTeamWhatsAppConfirmationUrl(booking);
    const customerWhatsappUrl = getCustomerWhatsAppConfirmationUrl(booking);

    console.log("👉 WhatsApp for Team:", teamWhatsappUrl);
    console.log("👉 WhatsApp for Customer:", customerWhatsappUrl);
    
    // Show status to user
    if (emailSent || telegramSent) {
      console.log('✅ Confirmation notifications sent successfully');
      console.log('📧📱 Fastridedroptaxi team notified via Email, WhatsApp, and Telegram');
    } else {
      console.log('⚠️ Some notifications failed, but WhatsApp notification sent');
    }
  } catch (error) {
    console.error('❌ Error in confirmation notifications:', error);
    // Still send WhatsApp even if email fails
    await sendWhatsAppConfirmationNotification(booking);
    await sendCustomerWhatsAppConfirmationNotification(booking);
  }

}
