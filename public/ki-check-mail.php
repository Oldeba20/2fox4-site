<?php
/**
 * Gemeinsamer Baustein für die KI-Sichtbarkeits-AUSWERTUNGSMAIL an den Kunden.
 *
 * Wird von ki-check.php (bereits bestätigte Adresse) UND ki-check-confirm.php
 * (frisch per Double-Opt-in bestätigt) eingebunden. Erzeugt eine grafisch
 * aufbereitete HTML-Mail inkl. Erklärung der Begriffe und einem klaren
 * Call-to-Action für ein Beratungsgespräch, plus eine Plaintext-Alternative.
 *
 * WICHTIG: Diese Mail geht ausschließlich an Adressen, die das DOI-Verfahren
 * durchlaufen haben (oder es früher bereits bestätigt hatten).
 */

declare(strict_types=1);

if (!function_exists('kic_h')) {
    function kic_h($s): string { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
}

/** Ampelfarbe passend zum Score (identisch zur Logik der On-Page-Vorschau). */
function kicheck_score_color(int $score): string {
    if ($score >= 67) return '#ffe600';
    if ($score >= 34) return '#ff6b35';
    return '#9aa0a6';
}

/**
 * Baut den HTML-Body der Auswertungsmail.
 * $d erwartet: business, domain, score, level, summary, mentions, citations,
 *              nChecked, questions[ {question,mentioned,cited} ], recommendations[]
 */
function kicheck_result_email_html(array $d, array $config): string {
    $score     = max(0, min(100, (int)($d['score'] ?? 0)));
    $level     = (string)($d['level'] ?? '');
    $business  = trim((string)($d['business'] ?? ''));
    $summary   = (string)($d['summary'] ?? '');
    $mentions  = (int)($d['mentions'] ?? 0);
    $citations = (int)($d['citations'] ?? 0);
    $nChecked  = max(1, (int)($d['nChecked'] ?? 1));
    $questions = is_array($d['questions'] ?? null) ? $d['questions'] : [];
    $recs      = is_array($d['recommendations'] ?? null) ? $d['recommendations'] : [];

    $base       = rtrim((string)($config['site_base_url'] ?? 'https://www.2fox4.de'), '/');
    $contactUrl = $base . '/kontakt/';
    $barColor   = kicheck_score_color($score);
    $barW       = max(3, $score);

    // ---- Fragenliste ----
    $qRows = '';
    foreach ($questions as $q) {
        $mentioned = !empty($q['mentioned']);
        $cited     = !empty($q['cited']);
        $badge = function (bool $on, string $onText, string $offText): string {
            $bg = $on ? '#16331b' : '#242424';
            $fg = $on ? '#69db7c' : '#8a8a8a';
            $tx = $on ? $onText : $offText;
            return '<span style="display:inline-block;font-size:11px;font-weight:600;color:' . $fg
                . ';background:' . $bg . ';border-radius:5px;padding:3px 9px;margin:2px 6px 2px 0;">' . $tx . '</span>';
        };
        $qRows .= '<tr><td style="padding:12px 0;border-bottom:1px solid #232323;">'
            . '<div style="color:#ededed;font-size:14px;line-height:1.5;">' . kic_h($q['question'] ?? '') . '</div>'
            . '<div style="margin-top:7px;">'
            . $badge($mentioned, 'genannt', 'nicht genannt')
            . $badge($cited, 'verlinkt', 'nicht verlinkt')
            . '</div></td></tr>';
    }

    // ---- Empfehlungen ----
    $recRows = '';
    foreach ($recs as $rec) {
        $recRows .= '<tr><td style="padding:7px 0;color:#cfcfcf;font-size:14px;line-height:1.55;vertical-align:top;">'
            . '<span style="color:#ffe600;font-weight:700;">→</span>&nbsp;&nbsp;' . kic_h($rec) . '</td></tr>';
    }

    $heroSub = $business !== '' ? ('für ' . kic_h($business)) : 'für dein Unternehmen';

    return '<!doctype html>
<html lang="de"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark">
<title>Deine KI-Sichtbarkeits-Auswertung</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#0a0a0a;">Deine KI-Sichtbarkeit liegt bei ' . $score . '% – hier ist deine vollständige Auswertung mit konkreten nächsten Schritten.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#141414;border:1px solid #262626;border-radius:18px;overflow:hidden;font-family:Arial,Helvetica,sans-serif;">

  <!-- Header -->
  <tr><td style="padding:26px 32px 18px;border-bottom:1px solid #232323;">
    <span style="font-size:22px;font-weight:800;letter-spacing:-0.5px;color:#ffffff;">2FOX<span style="color:#ff6b35;">4</span></span>
    <span style="float:right;color:#8a8a8a;font-size:12px;padding-top:8px;">KI-Sichtbarkeits-Check</span>
  </td></tr>

  <!-- Hero / Score -->
  <tr><td style="padding:32px 32px 8px;text-align:center;">
    <div style="color:#9a9a9a;font-size:14px;">Deine KI-Sichtbarkeit ' . $heroSub . '</div>
    <div style="font-size:54px;font-weight:800;color:' . $barColor . ';line-height:1.1;margin:6px 0 2px;">' . $score . '%</div>
    <div style="color:#ffffff;font-size:16px;font-weight:600;">' . kic_h($level) . '</div>
    <!-- Score-Balken -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0 6px;">
      <tr><td style="background:#262626;border-radius:7px;">
        <table role="presentation" width="' . $barW . '%" cellpadding="0" cellspacing="0"><tr>
          <td style="background:' . $barColor . ';height:12px;border-radius:7px;font-size:0;line-height:0;">&nbsp;</td>
        </tr></table>
      </td></tr>
    </table>
    ' . ($summary !== '' ? '<div style="color:#b6b6b6;font-size:14px;line-height:1.6;margin-top:14px;">' . kic_h($summary) . '</div>' : '') . '
  </td></tr>

  <!-- Stats -->
  <tr><td style="padding:18px 32px 6px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="50%" style="padding:6px;">
        <table role="presentation" width="100%" style="background:#1b1b1b;border:1px solid #262626;border-radius:12px;"><tr>
          <td style="padding:16px;text-align:center;">
            <div style="color:#ffffff;font-size:22px;font-weight:700;">' . $mentions . ' / ' . $nChecked . '</div>
            <div style="color:#9a9a9a;font-size:12px;margin-top:2px;">Anfragen, bei denen du <b style="color:#cfcfcf;">genannt</b> wirst</div>
          </td>
        </tr></table>
      </td>
      <td width="50%" style="padding:6px;">
        <table role="presentation" width="100%" style="background:#1b1b1b;border:1px solid #262626;border-radius:12px;"><tr>
          <td style="padding:16px;text-align:center;">
            <div style="color:#ffffff;font-size:22px;font-weight:700;">' . $citations . ' / ' . $nChecked . '</div>
            <div style="color:#9a9a9a;font-size:12px;margin-top:2px;">Anfragen, bei denen du <b style="color:#cfcfcf;">verlinkt</b> wirst</div>
          </td>
        </tr></table>
      </td>
    </tr></table>
  </td></tr>

  <!-- Begriffs-Erklärung -->
  <tr><td style="padding:14px 32px;">
    <table role="presentation" width="100%" style="background:#15150a;border:1px solid #3a3717;border-radius:12px;"><tr>
      <td style="padding:16px 18px;">
        <div style="color:#ffe600;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:8px;">Was bedeutet das?</div>
        <div style="color:#d6d6d6;font-size:13px;line-height:1.6;">
          <b style="color:#ffffff;">Genannt</b> = Dein Unternehmen wird im Antworttext der KI-Suche namentlich erwähnt – die KI kennt dich und nennt dich als möglichen Anbieter.<br><br>
          <b style="color:#ffffff;">Verlinkt</b> = Die KI führt deine Website als Quelle an und verlinkt sie. Das ist die stärkste Form der Sichtbarkeit, weil Nutzer direkt zu dir gelangen.
        </div>
      </td>
    </tr></table>
  </td></tr>

  ' . ($qRows !== '' ? '<!-- Fragen -->
  <tr><td style="padding:14px 32px 4px;">
    <div style="color:#8a8a8a;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Geprüfte Käuferfragen &amp; Ergebnis</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">' . $qRows . '</table>
  </td></tr>' : '') . '

  ' . ($recRows !== '' ? '<!-- Empfehlungen -->
  <tr><td style="padding:20px 32px 6px;">
    <table role="presentation" width="100%" style="background:#1b1b1b;border:1px solid #262626;border-radius:12px;"><tr>
      <td style="padding:18px 20px;">
        <div style="color:#ffffff;font-size:15px;font-weight:700;margin-bottom:8px;">Deine nächsten Schritte</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">' . $recRows . '</table>
      </td>
    </tr></table>
  </td></tr>' : '') . '

  <!-- CTA -->
  <tr><td style="padding:26px 32px 6px;text-align:center;">
    <div style="color:#ededed;font-size:16px;font-weight:600;line-height:1.5;margin-bottom:4px;">Willst du in der KI-Suche ganz vorne stehen?</div>
    <div style="color:#9a9a9a;font-size:14px;line-height:1.6;margin-bottom:18px;">In einem kostenlosen Gespräch zeige ich dir, welche Schritte für genau dein Unternehmen den größten Hebel haben.</div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr>
      <td style="background:#ffe600;border-radius:10px;">
        <a href="' . kic_h($contactUrl) . '" style="display:inline-block;padding:15px 30px;font-size:15px;font-weight:700;color:#0a0a0a;text-decoration:none;border-radius:10px;">Kostenloses Beratungsgespräch sichern →</a>
      </td>
    </tr></table>
    <div style="color:#7a7a7a;font-size:13px;margin-top:14px;">Oder antworte einfach direkt auf diese E-Mail.</div>
  </td></tr>

  <!-- Disclaimer -->
  <tr><td style="padding:22px 32px 8px;">
    <div style="color:#6f6f6f;font-size:12px;line-height:1.6;border-top:1px solid #232323;padding-top:16px;">
      Hinweis: Das Ergebnis ist ein starker Indikator für deine KI-Sichtbarkeit, keine garantierte 1:1-Abbildung der jeweiligen App. KI-Antworten können je nach Zeitpunkt und Formulierung variieren.
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:8px 32px 28px;">
    <div style="color:#6f6f6f;font-size:12px;line-height:1.6;">
      Du erhältst diese E-Mail, weil du beim KI-Sichtbarkeits-Check auf 2fox4.de deine Auswertung angefordert und per Bestätigungslink (Double-Opt-in) bestätigt hast.
      Möchtest du keine weiteren E-Mails? Antworte einfach mit „Abmelden“.<br><br>
      2fox4 · <a href="' . kic_h($base) . '" style="color:#9a9a9a;">www.2fox4.de</a>
    </div>
  </td></tr>

</table>
</td></tr></table>
</body></html>';
}

/** Plaintext-Alternative (Deliverability + Clients ohne HTML). */
function kicheck_result_email_text(array $d, array $config): string {
    $score     = max(0, min(100, (int)($d['score'] ?? 0)));
    $level     = (string)($d['level'] ?? '');
    $business  = trim((string)($d['business'] ?? ''));
    $summary   = (string)($d['summary'] ?? '');
    $mentions  = (int)($d['mentions'] ?? 0);
    $citations = (int)($d['citations'] ?? 0);
    $nChecked  = max(1, (int)($d['nChecked'] ?? 1));
    $questions = is_array($d['questions'] ?? null) ? $d['questions'] : [];
    $recs      = is_array($d['recommendations'] ?? null) ? $d['recommendations'] : [];
    $base      = rtrim((string)($config['site_base_url'] ?? 'https://www.2fox4.de'), '/');

    $l = [];
    $l[] = 'Deine KI-Sichtbarkeits-Auswertung' . ($business !== '' ? ' für ' . $business : '');
    $l[] = str_repeat('=', 40);
    $l[] = 'Score: ' . $score . '% – ' . $level;
    if ($summary !== '') $l[] = $summary;
    $l[] = '';
    $l[] = 'Genannt:  ' . $mentions . ' von ' . $nChecked . ' Anfragen';
    $l[] = 'Verlinkt: ' . $citations . ' von ' . $nChecked . ' Anfragen';
    $l[] = '';
    $l[] = 'Was bedeutet das?';
    $l[] = '- "Genannt": Dein Unternehmen wird im Antworttext der KI namentlich erwähnt.';
    $l[] = '- "Verlinkt": Die KI führt deine Website als Quelle an und verlinkt sie.';
    $l[] = '';
    if ($questions) {
        $l[] = 'Geprüfte Fragen:';
        foreach ($questions as $q) {
            $tag = !empty($q['cited']) ? 'genannt + verlinkt' : (!empty($q['mentioned']) ? 'genannt' : 'nicht genannt');
            $l[] = ' [' . $tag . '] ' . (string)($q['question'] ?? '');
        }
        $l[] = '';
    }
    if ($recs) {
        $l[] = 'Deine nächsten Schritte:';
        foreach ($recs as $rec) $l[] = ' - ' . (string)$rec;
        $l[] = '';
    }
    $l[] = 'Kostenloses Beratungsgespräch sichern: ' . $base . '/kontakt/';
    $l[] = 'Oder antworte einfach direkt auf diese E-Mail.';
    $l[] = '';
    $l[] = 'Hinweis: Das Ergebnis ist ein starker Indikator, keine garantierte 1:1-Abbildung der jeweiligen App.';
    $l[] = '';
    $l[] = 'Du erhältst diese E-Mail, weil du deine Auswertung angefordert und per Double-Opt-in bestätigt hast.';
    $l[] = 'Abmelden jederzeit per Antwort mit „Abmelden". · 2fox4 · ' . $base;
    return implode("\r\n", $l);
}

/**
 * Versendet die Auswertungsmail per SMTP. Gibt true bei Erfolg zurück.
 * Erwartet $data mit denselben Keys wie kicheck_result_email_html().
 */
function kicheck_send_result_mail(array $config, array $data): bool {
    $mailFile = __DIR__ . '/lib/PHPMailer/PHPMailer.php';
    if (!is_file($mailFile) || empty($config['smtp_host'])) {
        return false;
    }
    $to = (string)($data['email'] ?? '');
    if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    require_once __DIR__ . '/lib/PHPMailer/Exception.php';
    require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
    require_once __DIR__ . '/lib/PHPMailer/SMTP.php';

    $score = max(0, min(100, (int)($data['score'] ?? 0)));
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_password'];
    $mail->SMTPSecure = ($config['smtp_secure'] ?? 'tls') === 'ssl'
        ? \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
        : \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port    = (int)($config['smtp_port'] ?? 587);
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['mail_from'], $config['mail_from_name'] ?? '2fox4');
    $mail->addAddress($to);
    // Antworten sollen bei Oliver landen, nicht im No-Reply-Postfach.
    if (!empty($config['mail_to'])) {
        $mail->addReplyTo($config['mail_to'], '2fox4');
    }
    $mail->Subject = 'Deine KI-Sichtbarkeits-Auswertung: ' . $score . '%';
    $mail->isHTML(true);
    $mail->Body    = kicheck_result_email_html($data, $config);
    $mail->AltBody = kicheck_result_email_text($data, $config);
    $mail->send();
    return true;
}
